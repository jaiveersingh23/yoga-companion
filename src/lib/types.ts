
export interface Asana {
  id: string;
  name: string;
  sanskritName: string;
  description: string;
  instructions: string[];
  imageUrl: string;
  imageHint: string;
  videoUrl?: string;
  benefits: string[];
  contraindications?: string[];
  category: 'Standing' | 'Seated' | 'Supine' | 'Prone' | 'Inversion' | 'Balancing' | 'Restorative';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export interface PranayamaTechnique {
  id: string;
  name: string;
  sanskritName?: string;
  description: string;
  instructions: string[];
  benefits: string[];
  contraindications?: string[];
  durationOptions: number[]; // e.g., [3, 5, 10] minutes
  breathingPattern?: {
    inhale: number;
    holdInhale?: number;
    exhale: number;
    holdExhale?: number;
    rounds: number;
  };
  imageUrl?: string;
  imageHint?: string;
}

export interface EducationTopic {
  id: string;
  title: string;
  introduction: string;
  content: string; // Markdown or HTML string
  benefits?: string[];
  practiceTips?: string[];
  imageUrl?: string;
  imageHint?: string;
}

export interface EducationSection {
  slug: string;
  name: string;
  description: string;
  icon?: React.ElementType; // Lucide icon
  topics: EducationTopic[];
  image?: string;
  imageHint?: string;
}
