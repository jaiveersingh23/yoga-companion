import type { EducationSection, EducationTopic } from './types';
import { Fingerprint, Lock, Droplets, Brain, Zap } from 'lucide-react'; // Example icons

const mudraTopics: EducationTopic[] = [
  {
    id: 'gyan-mudra',
    title: 'Gyan Mudra (Mudra of Knowledge)',
    introduction: 'Gyan Mudra is one of the most common hand gestures in yoga and meditation, believed to enhance wisdom and knowledge.',
    content: 'To perform Gyan Mudra, touch the tip of your index finger to the tip of your thumb, keeping the other three fingers straight and relaxed. This can be done with both hands, resting them on your knees with palms facing up during meditation.',
    benefits: ['Improves concentration and memory', 'Relieves stress and anxiety', 'Stimulates the root chakra', 'Enhances knowledge and wisdom'],
    practiceTips: ['Practice regularly during meditation or quiet contemplation.', 'Can be held for 15-45 minutes daily.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'gyan mudra hand',
  },
  {
    id: 'vayu-mudra',
    title: 'Vayu Mudra (Mudra of Air)',
    introduction: 'Vayu Mudra is used to balance the air element in the body, often helpful for issues related to excess air, like gas or joint pain.',
    content: 'Fold your index finger and press it with the base of your thumb. Keep the other three fingers extended and straight. This mudra helps regulate the air element.',
    benefits: ['Relieves gas, bloating, and indigestion', 'Reduces joint pain and arthritis symptoms', 'Calms an anxious mind'],
    practiceTips: ['Can be practiced anytime, especially after meals if experiencing discomfort.', 'Hold for 10-15 minutes, three times a day for best results.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'vayu mudra hand',
  },
];

const bandhaTopics: EducationTopic[] = [
  {
    id: 'mula-bandha',
    title: 'Mula Bandha (Root Lock)',
    introduction: 'Mula Bandha involves contracting the perineum, redirecting energy upwards and grounding the practitioner.',
    content: 'To engage Mula Bandha, gently contract the muscles in the perineal region (between the anus and genitals). This subtle lift helps to contain and direct prana (life force energy) upwards. It is often practiced during asana and pranayama.',
    benefits: ['Strengthens pelvic floor muscles', 'Improves stability and grounding', 'Stimulates the root chakra', 'Enhances energy control'],
    practiceTips: ['Start with short holds and gradually increase duration.', 'Coordinate with breath: engage on exhalation or breath retention.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'pelvic floor anatomy',
  },
];

const shatkarmaTopics: EducationTopic[] = [
 {
    id: 'jala-neti',
    title: 'Jala Neti (Nasal Cleansing with Water)',
    introduction: 'Jala Neti is a yogic cleansing technique that involves rinsing the nasal passages with saline water using a neti pot.',
    content: 'Warm, slightly salted water is poured into one nostril and allowed to flow out through the other. This helps to clear mucus, allergens, and pollutants from the nasal passages.',
    benefits: ['Relieves sinus congestion and allergies', 'Improves breathing', 'Prevents colds and respiratory infections', 'Calms the mind and reduces headaches'],
    practiceTips: ['Use lukewarm, sterile saline water.', 'Lean forward and tilt your head correctly.', 'Breathe through your mouth during the process.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'neti pot yoga',
  },
];

const dhyanaTopics: EducationTopic[] = [
  {
    id: 'mindfulness-meditation',
    title: 'Mindfulness Meditation (Vipassanā)',
    introduction: 'Mindfulness meditation involves paying attention to the present moment without judgment. It can focus on breath, bodily sensations, thoughts, or emotions.',
    content: 'Sit comfortably, close your eyes, and bring your attention to your breath. Notice the sensation of air entering and leaving your body. When your mind wanders, gently bring your focus back to your breath. This practice cultivates awareness and equanimity.',
    benefits: ['Reduces stress and anxiety', 'Improves focus and attention', 'Enhances self-awareness', 'Promotes emotional regulation'],
    practiceTips: ['Start with short sessions (5-10 minutes) and gradually increase.', 'Be patient and non-judgmental with yourself.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'meditation silhouette peace',
  },
];

const kundaliniTopics: EducationTopic[] = [
 {
    id: 'intro-kundalini',
    title: 'Introduction to Kundalini',
    introduction: 'Kundalini is described as a dormant spiritual energy coiled at the base of the spine, often visualized as a serpent.',
    content: 'Kundalini Yoga aims to awaken this energy and guide it upwards through the chakras (energy centers) to achieve spiritual enlightenment and self-realization. Practices include asana, pranayama, mantra chanting, and meditation.',
    benefits: ['Increased spiritual awareness', 'Enhanced vitality and creativity', 'Emotional balance and clarity', 'Profound personal transformation'],
    practiceTips: ['Approach with reverence and guidance from an experienced teacher.', 'Practice consistently and with patience.'],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'kundalini serpent energy',
  },
];


export const educationSections: EducationSection[] = [
  {
    slug: 'mudras',
    name: 'Mudras (Gestures)',
    description: 'Explore symbolic hand gestures that channel energy and influence mind-body states.',
    icon: Fingerprint,
    topics: mudraTopics,
    image: 'https://placehold.co/800x400.png',
    imageHint: 'yoga hands mudra',
  },
  {
    slug: 'bandhas',
    name: 'Bandhas (Energy Locks)',
    description: 'Learn about energy locks that contain and direct prana within the body.',
    icon: Lock,
    topics: bandhaTopics,
    image: 'https://placehold.co/800x400.png',
    imageHint: 'energy flow body',
  },
  {
    slug: 'shatkarmas',
    name: 'Shatkarmas (Cleansing Techniques)',
    description: 'Discover yogic purification practices for physical and energetic cleansing.',
    icon: Droplets,
    topics: shatkarmaTopics,
    image: 'https://placehold.co/800x400.png',
    imageHint: 'water cleansing nature',
  },
  {
    slug: 'dhyana',
    name: 'Dhyana (Meditation)',
    description: 'Understand the principles and techniques of yogic meditation for inner peace.',
    icon: Brain,
    topics: dhyanaTopics,
    image: 'https://placehold.co/800x400.png',
    imageHint: 'serene meditation landscape',
  },
  {
    slug: 'kundalini',
    name: 'Kundalini (Spiritual Energy)',
    description: 'Delve into the concept of Kundalini energy and its awakening.',
    icon: Zap,
    topics: kundaliniTopics,
    image: 'https://placehold.co/800x400.png',
    imageHint: 'cosmic energy spiral',
  },
];

export const getEducationSectionBySlug = (slug: string): EducationSection | undefined => {
  return educationSections.find(section => section.slug === slug);
};

export const getEducationTopicById = (sectionSlug: string, topicId: string): EducationTopic | undefined => {
  const section = getEducationSectionBySlug(sectionSlug);
  return section?.topics.find(topic => topic.id === topicId);
};
