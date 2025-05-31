import Link from 'next/link';
import Image from 'next/image';
import { asanas } from '@/lib/asanaData';
import type { Asana } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StretchHorizontal, ArrowRight } from 'lucide-react';

export default function AsanasPage() {
  return (
    <div>
      <PageHeader
        title="Explore Asanas"
        description="Discover a variety of yoga poses. Click on an asana to learn more about its benefits, instructions, and variations."
        icon={StretchHorizontal}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {asanas.map((asana: Asana) => (
          <Card key={asana.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={asana.imageUrl}
                  alt={asana.name}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={asana.imageHint}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardTitle className="font-headline text-xl">{asana.name}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{asana.sanskritName}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm line-clamp-3 mb-3">{asana.description}</p>
              <div className="space-x-2">
                <Badge variant="secondary">{asana.level}</Badge>
                <Badge variant="outline">{asana.category}</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                <Link href={`/asanas/${asana.id}`}>
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
