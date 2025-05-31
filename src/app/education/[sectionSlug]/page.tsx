
import Link from 'next/link';
import Image from 'next/image';
import { getEducationSectionBySlug, educationSections } from '@/lib/educationData';
import type { EducationSection, EducationTopic } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface EducationSectionPageProps {
  params: {
    sectionSlug: string;
  };
}

export default function EducationSectionPage({ params }: EducationSectionPageProps) {
  const section = getEducationSectionBySlug(params.sectionSlug);

  if (!section) {
    return (
      <div className="text-center py-10">
        <h1 className="font-headline text-2xl">Education Section not found</h1>
        <Button asChild variant="link" className="mt-4">
            <Link href="/education">Back to Education</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={section.name}
        description={section.description}
        icon={section.icon}
      />
       {section.image && (
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-8 shadow-md">
          <Image 
            src={section.image} 
            alt={section.name} 
            layout="fill" 
            objectFit="cover"
            data-ai-hint={section.imageHint || 'yoga study'}
          />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {section.topics.map((topic: EducationTopic) => (
          <Card key={topic.id} className="group flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {topic.imageUrl && (
                <div className="relative w-full h-48">
                <Image
                    src={topic.imageUrl}
                    alt={topic.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={topic.imageHint || 'yoga detail'}
                    className="transition-transform duration-300 group-hover:scale-105"
                />
                </div>
            )}
            <CardHeader className={!topic.imageUrl ? "pt-6" : ""}>
              <CardTitle className="font-headline text-xl">{topic.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm line-clamp-3">{topic.introduction}</p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="text-primary hover:text-primary/80 p-0">
                <Link href={`/education/${section.slug}/${topic.id}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/education">Back to All Education Sections</Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return educationSections.map((section: EducationSection) => ({
    sectionSlug: section.slug,
  }));
}
