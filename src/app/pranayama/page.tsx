
import Link from 'next/link';
import Image from 'next/image';
import { pranayamaTechniques } from '@/lib/pranayamaData';
import type { PranayamaTechnique } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wind, ArrowRight, Youtube } from 'lucide-react';

export default function PranayamaPage() {
  return (
    <div>
      <PageHeader
        title="Guided Pranayama"
        description="Explore various breathing techniques to enhance your vitality, calm your mind, and deepen your meditative states."
        icon={Wind}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pranayamaTechniques.map((technique: PranayamaTechnique) => (
          <Card key={technique.id} className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
             {technique.imageUrl && (
              <div className="w-full h-48 overflow-hidden relative">
                <Image
                  src={technique.imageUrl}
                  alt={technique.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                 {technique.videoUrl && (
                  <div className="absolute top-2 right-2 bg-black/50 p-1 rounded-full">
                    <Youtube className="h-5 w-5 text-red-500" />
                  </div>
                )}
              </div>
            )}
            <CardHeader className={!technique.imageUrl ? "pt-6" : ""}>
              <CardTitle className="font-headline text-xl">{technique.name}</CardTitle>
              {technique.sanskritName && <CardDescription className="text-sm text-muted-foreground">{technique.sanskritName}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm line-clamp-4">{technique.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                <Link href={`/pranayama/${technique.id}`}>
                  Practice Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
