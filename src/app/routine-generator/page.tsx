import { Wand2 } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import RoutineForm from '@/components/routine/RoutineForm';

export default function RoutineGeneratorPage() {
  return (
    <div>
      <PageHeader
        title="Personalized Yoga Routine"
        description="Tell us about your preferences, and we'll generate a unique yoga routine tailored just for you."
        icon={Wand2}
      />
      <RoutineForm />
    </div>
  );
}
