
import Link from 'next/link';
import { getEducationTopicById, getEducationSectionBySlug, educationSections } from '@/lib/educationData';
import type { EducationTopic, EducationSection } from '@/lib/types';
import PageHeader from '@/components/shared/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, AlertTriangle } from 'lucide-react'; 

interface EducationTopicPageProps {
  params: {
    sectionSlug: string;
    topicId: string;
  };
}

export default function EducationTopicPage({ params }: EducationTopicPageProps) {
  const topic = getEducationTopicById(params.sectionSlug, params.topicId);
  const section = getEducationSectionBySlug(params.sectionSlug);

  if (!topic || !section) {
    return (
      <div className="text-center py-10">
        <h1 className="font-headline text-2xl">Topic not found</h1>
        <Button asChild variant="link" className="mt-4">
            <Link href={`/education/${params.sectionSlug}`}>Back to {section?.name || 'Section'}</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <PageHeader title={topic.title} description={section.name} icon={section.icon} />

      <Card className="shadow-lg">
        <CardHeader className="pt-6">
          <p className="text-muted-foreground text-lg">{topic.introduction}</p>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-foreground/90">
          <div dangerouslySetInnerHTML={{ __html: topic.content }} />

          {topic.benefits && topic.benefits.length > 0 && (
            <>
              <h3 className="font-headline text-xl mt-6 mb-3 text-primary">Benefits</h3>
              <ul className="space-y-2">
                {topic.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          {topic.practiceTips && topic.practiceTips.length > 0 && (
            <>
              <h3 className="font-headline text-xl mt-6 mb-3 text-primary">Practice Tips</h3>
              <ul className="space-y-2">
                {topic.practiceTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <Link href={`/education/${section.slug}`}>Back to {section.name}</Link>
        </Button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const params: { sectionSlug: string; topicId: string }[] = [];
  educationSections.forEach((section: EducationSection) => {
    section.topics.forEach((topic: EducationTopic) => {
      params.push({ sectionSlug: section.slug, topicId: topic.id });
    });
  });
  return params;
}
