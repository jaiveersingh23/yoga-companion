
'use client';

import { use, useEffect, useState } from 'react';
import { getPranayamaById } from '@/lib/pranayamaData';
import type { PranayamaTechnique } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, RotateCcw, Info, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface PranayamaGuidePageProps {
  params: Promise<{ // Updated to reflect that params is a Promise
    pranayamaId: string;
  }>;
}

export default function PranayamaGuidePage({ params }: PranayamaGuidePageProps) {
  const resolvedParams = use(params); // Unwrap the params Promise
  const technique = getPranayamaById(resolvedParams.pranayamaId);

  const [duration, setDuration] = useState<number>(technique?.durationOptions[0] || 5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [currentPhase, setCurrentPhase] = useState<'inhale' | 'holdInhale' | 'exhale' | 'holdExhale' | 'idle'>('idle');
  const [phaseTimeLeft, setPhaseTimeLeft] = useState(0);
  const [roundCount, setRoundCount] = useState(0);

  useEffect(() => {
    setTimeLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    if (!isRunning || !technique?.breathingPattern) {
      setCurrentPhase('idle');
      return;
    }

    let intervalId: NodeJS.Timeout;
    let phaseIntervalId: NodeJS.Timeout;

    const mainTimer = () => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsRunning(false);
          setCurrentPhase('idle');
          toastComplete();
          return 0;
        }
        return prev - 1;
      });
    };

    const cyclePhases = () => {
      const { inhale, holdInhale = 0, exhale, holdExhale = 0, rounds } = technique.breathingPattern!;
      
      if (roundCount >= rounds && rounds > 0) {
         setIsRunning(false);
         setCurrentPhase('idle');
         toastComplete();
         return;
      }

      setCurrentPhase('inhale');
      setPhaseTimeLeft(inhale);
      setTimeout(() => {
        if (holdInhale > 0) {
          setCurrentPhase('holdInhale');
          setPhaseTimeLeft(holdInhale);
        }
        setTimeout(() => {
          setCurrentPhase('exhale');
          setPhaseTimeLeft(exhale);
          setTimeout(() => {
            if (holdExhale > 0) {
              setCurrentPhase('holdExhale');
              setPhaseTimeLeft(holdExhale);
            }
            setTimeout(() => {
              setRoundCount(prev => prev + 1);
              if (isRunning) cyclePhases(); // Loop if still running
            }, holdExhale * 1000);
          }, exhale * 1000);
        }, holdInhale * 1000);
      }, inhale * 1000);
    };
    
    const phaseTimer = () => {
        setPhaseTimeLeft(prev => (prev <= 1 ? 0 : prev-1));
    }

    if (isRunning) {
      intervalId = setInterval(mainTimer, 1000);
      phaseIntervalId = setInterval(phaseTimer, 1000);
      if(currentPhase === 'idle') { // Start new cycle
        setRoundCount(0);
        cyclePhases();
      }
    }

    return () => {
      clearInterval(intervalId);
      clearInterval(phaseIntervalId);
    };
  }, [isRunning, technique, roundCount]);
  
  const toastComplete = () => {
    // In a real app, use `useToast` here. For now, console log.
    console.log("Pranayama session complete!");
  };

  if (!technique) {
    return (
      <div className="text-center py-10">
        <h1 className="font-headline text-2xl">Pranayama Technique not found</h1>
         <Button asChild variant="link" className="mt-4">
            <Link href="/pranayama">Back to Pranayama List</Link>
        </Button>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(duration * 60);
    setCurrentPhase('idle');
    setPhaseTimeLeft(0);
    setRoundCount(0);
  };

  const getPhaseText = () => {
    switch (currentPhase) {
      case 'inhale': return 'Inhale';
      case 'holdInhale': return 'Hold';
      case 'exhale': return 'Exhale';
      case 'holdExhale': return 'Hold';
      default: return 'Ready?';
    }
  };
  
  const circleSize = phaseTimeLeft > 0 ? (currentPhase === 'inhale' || currentPhase === 'holdInhale' ? 100 + phaseTimeLeft * 5 : 150 - phaseTimeLeft * 5) : 100;


  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader title={technique.name} description={technique.sanskritName} />
      
      {technique.imageUrl && (
        <div className="relative w-full h-64 rounded-lg overflow-hidden mb-8 shadow-md">
          <Image src={technique.imageUrl} alt={technique.name} layout="fill" objectFit="cover"  />
        </div>
      )}

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Guided Session</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="my-8 flex justify-center items-center">
            <div 
              className="w-32 h-32 md:w-40 md:h-40 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out"
              style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
            >
              <div className="text-center">
                <p className="font-bold text-2xl md:text-3xl text-primary">{getPhaseText()}</p>
                {isRunning && technique.breathingPattern && <p className="text-xl text-primary/80">{phaseTimeLeft > 0 ? phaseTimeLeft : ''}</p>}
              </div>
            </div>
          </div>

          <p className="text-4xl font-bold text-foreground mb-4">{formatTime(timeLeft)}</p>
          {technique.breathingPattern && isRunning && <p className="text-muted-foreground mb-4">Round: {roundCount + 1} / {technique.breathingPattern.rounds}</p>}


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Select
              value={duration.toString()}
              onValueChange={(value) => {
                setDuration(Number(value));
                resetTimer();
              }}
              disabled={isRunning}
            >
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {technique.durationOptions.map(opt => (
                  <SelectItem key={opt} value={opt.toString()}>{opt} minutes</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex gap-2">
                <Button onClick={toggleTimer} size="lg" className="min-w-[100px]">
                {isRunning ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
                {isRunning ? 'Pause' : 'Start'}
                </Button>
                <Button onClick={resetTimer} variant="outline" size="lg">
                <RotateCcw className="mr-2 h-5 w-5" /> Reset
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center"><Info className="mr-2 h-5 w-5 text-accent" /> About {technique.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground/90 mb-4">{technique.description}</p>
          <h3 className="font-semibold font-headline text-lg mb-2 mt-4">Instructions:</h3>
          <ul className="list-decimal list-inside space-y-1 text-foreground/80">
            {technique.instructions.map((step, index) => <li key={index}>{step}</li>)}
          </ul>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-xl flex items-center"><CheckCircle2 className="mr-2 h-5 w-5 text-green-500" /> Benefits</CardTitle>
        </CardHeader>
        <CardContent>
           <ul className="list-disc list-inside space-y-1 text-foreground/80">
            {technique.benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
         <Button asChild variant="outline">
            <Link href="/pranayama">Back to Pranayama List</Link>
         </Button>
       </div>
    </div>
  );
}
