import Image from 'next/image';
import { getAsanaById } from '@/lib/asanaData';
import type { Asana } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, CheckCircle2, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface AsanaDetailPageProps {
  params: {
    asanaId: string;
  };
}

export default function AsanaDetailPage({ params }: AsanaDetailPageProps) {
  const asana = getAsanaById(params.asanaId);

  if (!asana) {
    return (
      <div className="text-center py-10">
        <h1 className="font-headline text-2xl">Asana not found</h1>
        <p>The requested yoga pose could not be found.</p>
        <Button asChild variant="link" className="mt-4">
            <Link href="/asanas">Back to Asanas</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader title={asana.name} description={asana.sanskritName} />

      <Card className="mb-8 shadow-lg overflow-hidden">
        <div className="relative w-full h-64 md:h-96">
          <Image
            src={asana.imageUrl}
            alt={asana.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={asana.imageHint}
          />
        </div>
        <CardContent className="p-6">
          <p className="text-lg text-muted-foreground mb-6">{asana.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="default" className="text-sm px-3 py-1">{asana.level}</Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">{asana.category}</Badge>
          </div>

          {asana.videoUrl && (
            <div className="mb-6">
              <Button asChild variant="outline" className="bg-red-600 hover:bg-red-700 text-white">
                <a href={asana.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-5 w-5" /> Watch Video Tutorial
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-2 text-foreground/90">
              {asana.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-xl">Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {asana.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {asana.contraindications && asana.contraindications.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="font-headline text-xl text-destructive">Contraindications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {asana.contraindications.map((contra, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                  <span>{contra}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
       <div className="mt-8 text-center">
         <Button asChild variant="outline">
            <Link href="/asanas">Back to Asana List</Link>
         </Button>
       </div>
    </div>
  );
}

export async function generateStaticParams() {
  // In a real app, fetch this from a CMS or database
  const localAsanas = (await import('@/lib/asanaData')).asanas;
  return localAsanas.map((asana: Asana) => ({
    asanaId: asana.id,
  }));
}
