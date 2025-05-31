
import Link from 'next/link';
import Image from 'next/image';
import { educationSections } from '@/lib/educationData';
import type { EducationSection } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

export default function EducationPage() {
  return (
    <div>
      <PageHeader
        title="Yoga Education"
        description="Deepen your understanding of yogic philosophy and practices. Explore various aspects of yoga beyond asanas."
        icon={BookOpen}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {educationSections.map((section: EducationSection) => (
          <Card key={section.slug} className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {section.image && (
                <div className="w-full h-48 overflow-hidden">
                <Image
                    src={section.image}
                    alt={section.name}
                    width={800} 
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={section.imageHint || 'yoga philosophy'}
                />
                </div>
            )}
            <CardHeader className={!section.image ? "pt-6" : ""}>
              <div className="flex items-center mb-2">
                {section.icon && <section.icon className="h-6 w-6 text-primary mr-2" />}
                <CardTitle className="font-headline text-xl">{section.name}</CardTitle>
              </div>
              <CardDescription className="text-sm line-clamp-3">{section.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                <Link href={`/education/${section.slug}`}>
                  Learn about {section.name} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
