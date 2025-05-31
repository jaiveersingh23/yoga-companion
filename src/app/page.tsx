
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Wand2, StretchHorizontal, Wind, BookOpen, ArrowRight } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

const features = [
  {
    title: 'Personalized Routines',
    description: 'Let our AI craft a yoga session tailored to your goals and experience level.',
    href: '/routine-generator',
    icon: Wand2,
  },
  {
    title: 'Explore Asanas',
    description: 'Discover a library of yoga poses with detailed instructions and benefits.',
    href: '/asanas',
    icon: StretchHorizontal,
  },
  {
    title: 'Guided Pranayama',
    description: 'Follow guided breathing exercises to calm your mind and energize your body.',
    href: '/pranayama',
    icon: Wind,
  },
  {
    title: 'Yoga Education',
    description: 'Learn about Mudras, Bandhas, Dhyana, and more to deepen your practice.',
    href: '/education',
    icon: BookOpen,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <PageHeader 
        title="Welcome to Yoga Companion"
        description="Your personal guide to holistic well-being through the ancient wisdom of yoga. Explore personalized routines, discover asanas, practice pranayama, and deepen your understanding of yogic philosophy."
        icon={Leaf}
      />

      <section className="w-full py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader className="pb-4 pt-6">
                <div className="flex items-center mb-3">
                  <feature.icon className="h-7 w-7 text-primary mr-3" />
                  <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-0">
                <div className="flex-grow mb-4"></div> {/* Spacer to push button down */}
                <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href={feature.href}>
                    Explore {feature.title.split(' ')[0]}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
