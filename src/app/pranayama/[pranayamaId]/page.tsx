
'use client';

import React, { use, useEffect, useState } from 'react';
import { getPranayamaById } from '@/lib/pranayamaData';
import type { PranayamaTechnique } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Play, Pause, RotateCcw, Info, CheckCircle2, AlertTriangle, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useToast } from '@/hooks/use-toast';
import { getYouTubeVideoId } from '@/lib/utils';


interface PranayamaGuidePageProps {
  params: Promise<{ 
    pranayamaId: string;
  }>;
}

export default function PranayamaGuidePage({ params }: PranayamaGuidePageProps) {
  const resolvedParams = use(params); 
  const technique = getPranayamaById(resolvedParams.pranayamaId);
  const { toast } = useToast();

  const [duration, setDuration] = useState<number>(technique?.durationOptions[0] || 5);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [currentPhase, setCurrentPhase] = useState<'inhale' | 'holdInhale' | 'exhale' | 'holdExhale' | 'idle'>('idle');
  const [phaseTimeLeft, setPhaseTimeLeft] = useState(0);
  const [roundCount, setRoundCount] = useState(0);

  const videoId = technique?.videoUrl ? getYouTubeVideoId(technique.videoUrl) : null;

  useEffect(() => {
    if (technique) {
      setTimeLeft(duration * 60);
      setIsRunning(false);
      setCurrentPhase('idle');
      setPhaseTimeLeft(0);
      setRoundCount(0);
    }
  }, [duration, technique, resolvedParams.pranayamaId]);
  
  const isRunningRef = React.useRef(isRunning);
  useEffect(() => {
    isRunningRef.current = isRunning;
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning || !technique?.breathingPattern) {
      setCurrentPhase('idle');
      return;
    }

    let intervalId: NodeJS.Timeout | undefined = undefined;
    let phaseIntervalId: NodeJS.Timeout | undefined = undefined;
    
    const clearTimers = () => {
        if (intervalId) clearInterval(intervalId);
        if (phaseIntervalId) clearInterval(phaseIntervalId);
    };

    const mainTimer = () => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setIsRunning(false);
          setCurrentPhase('idle');
          toast({title: "Pranayama Complete!", description: "Your guided session has finished."});
          clearTimers();
          return 0;
        }
        return prev - 1;
      });
    };
    
    let phaseTimeoutId: NodeJS.Timeout | undefined = undefined;

    const cyclePhases = () => {
      if (!isRunningRef.current) { 
        clearTimers();
        return;
      }

      const { inhale, holdInhale = 0, exhale, holdExhale = 0, rounds } = technique.breathingPattern!;
      
      if (rounds > 0 && roundCount >= rounds) {
         setIsRunning(false);
         setCurrentPhase('idle');
         toast({title: "Pranayama Complete!", description: "All rounds finished."});
         clearTimers();
         return;
      }

      setCurrentPhase('inhale');
      setPhaseTimeLeft(inhale);
      phaseTimeoutId = setTimeout(() => {
        if (!isRunningRef.current) { clearTimers(); return; }
        if (holdInhale > 0) {
          setCurrentPhase('holdInhale');
          setPhaseTimeLeft(holdInhale);
        }
        phaseTimeoutId = setTimeout(() => {
          if (!isRunningRef.current) { clearTimers(); return; }
          setCurrentPhase('exhale');
          setPhaseTimeLeft(exhale);
          phaseTimeoutId = setTimeout(() => {
            if (!isRunningRef.current) { clearTimers(); return; }
            if (holdExhale > 0) {
              setCurrentPhase('holdExhale');
              setPhaseTimeLeft(holdExhale);
            }
            phaseTimeoutId = setTimeout(() => {
              if (!isRunningRef.current) { clearTimers(); return; }
              setRoundCount(prev => prev + 1);
              if (isRunningRef.current) cyclePhases(); 
            }, holdExhale * 1000);
          }, exhale * 1000);
        }, holdInhale * 1000);
      }, inhale * 1000);
    };
    
    const phaseTimer = () => {
        setPhaseTimeLeft(prev => (prev <= 0 ? 0 : prev-1));
    }

    if (isRunning) {
      intervalId = setInterval(mainTimer, 1000);
      phaseIntervalId = setInterval(phaseTimer, 1000);
      if(currentPhase === 'idle') { 
        setRoundCount(0);
        cyclePhases();
      }
    }

    return () => {
      clearTimers();
      if(phaseTimeoutId) clearTimeout(phaseTimeoutId);
    };
  }, [isRunning, technique, roundCount, currentPhase, duration, toast]);


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
  
  const calculateCircleSize = () => {
    if (!technique?.breathingPattern || !isRunning || phaseTimeLeft <= 0 || currentPhase === 'idle') return 100;
    const { inhale, holdInhale = 0, exhale, holdExhale = 0 } = technique.breathingPattern;
    let totalDurationCurrentPhase = 0;
    if (currentPhase === 'inhale') totalDurationCurrentPhase = inhale;
    else if (currentPhase === 'holdInhale') totalDurationCurrentPhase = holdInhale;
    else if (currentPhase === 'exhale') totalDurationCurrentPhase = exhale;
    else if (currentPhase === 'holdExhale') totalDurationCurrentPhase = holdExhale;

    if (totalDurationCurrentPhase === 0) return 100;

    const progress = (totalDurationCurrentPhase - phaseTimeLeft) / totalDurationCurrentPhase;

    if (currentPhase === 'inhale') {
      return 100 + progress * 50; 
    } else if (currentPhase === 'holdInhale') {
      return 150;
    } else if (currentPhase === 'exhale') {
      return 150 - progress * 50;
    } else if (currentPhase === 'holdExhale') {
      return 100;
    }
    return 100;
  }
  const circleSize = calculateCircleSize();


  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader title={technique.name} description={technique.sanskritName} />
      
      <div className="mb-8">
        {videoId ? (
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`YouTube video player for ${technique.name}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
        ) : technique.imageUrl ? (
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
                <Image 
                    src={technique.imageUrl} 
                    alt={technique.name} 
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    unoptimized
                />
            </div>
        ) : null}
      </div>
      
      {technique.videoUrl && (
        <div className="mb-6 text-center">
          <Button asChild variant="outline" className="bg-red-600 hover:bg-red-700 text-white">
            <a href={technique.videoUrl} target="_blank" rel="noopener noreferrer">
              <Youtube className="mr-2 h-5 w-5" /> Watch on YouTube
            </a>
          </Button>
        </div>
      )}


      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-xl">Guided Session</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="my-8 flex justify-center items-center min-h-[150px]">
            <div 
              className="bg-primary/20 rounded-full flex items-center justify-center transition-all duration-500 ease-in-out"
              style={{ width: `${circleSize}px`, height: `${circleSize}px` }}
            >
              <div className="text-center">
                <p className="font-bold text-2xl md:text-3xl text-primary">{getPhaseText()}</p>
                {isRunning && technique.breathingPattern && currentPhase !== 'idle' && <p className="text-xl text-primary/80">{phaseTimeLeft > 0 ? phaseTimeLeft : ''}</p>}
              </div>
            </div>
          </div>

          <p className="text-4xl font-bold text-foreground mb-4">{formatTime(timeLeft)}</p>
          {technique.breathingPattern && isRunning && technique.breathingPattern.rounds > 0 && <p className="text-muted-foreground mb-4">Round: {roundCount + 1} / {technique.breathingPattern.rounds}</p>}
          {technique.breathingPattern && isRunning && technique.breathingPattern.rounds === 0 && <p className="text-muted-foreground mb-4">Continuous Practice</p>}


          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Select
              value={duration.toString()}
              onValueChange={(value) => {
                setDuration(Number(value));
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
      
      {technique.contraindications && technique.contraindications.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-headline text-xl flex items-center text-destructive"><AlertTriangle className="mr-2 h-5 w-5" /> Contraindications</CardTitle>
          </CardHeader>
          <CardContent>
             <ul className="list-disc list-inside space-y-1 text-foreground/80">
              {technique.contraindications.map((contra, index) => <li key={index}>{contra}</li>)}
            </ul>
          </CardContent>
        </Card>
      )}

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
