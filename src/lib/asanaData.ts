import type { Asana } from './types';

export const asanas: Asana[] = [
  {
    id: 'tadasana',
    name: 'Mountain Pose',
    sanskritName: 'Tadasana',
    description: 'The foundation of all standing poses, Tadasana teaches balance, stability, and stillness.',
    instructions: [
      'Stand with your big toes touching and heels slightly apart.',
      'Ground down through all four corners of your feet.',
      'Engage your thigh muscles, drawing them up.',
      'Keep your core engaged, tailbone slightly tucked.',
      'Relax your shoulders down and back, away from your ears.',
      'Extend your arms alongside your body, palms facing forward or towards thighs.',
      'Lengthen your neck, keeping your gaze soft and straight ahead.',
      'Breathe deeply and evenly.',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mountain pose yoga',
    benefits: ['Improves posture', 'Strengthens thighs, knees, and ankles', 'Firms abdomen and buttocks', 'Relieves sciatica', 'Reduces flat feet'],
    contraindications: ['Headache', 'Insomnia', 'Low blood pressure (if holding for long periods)'],
    category: 'Standing',
    level: 'Beginner',
  },
  {
    id: 'adho-mukha-svanasana',
    name: 'Downward-Facing Dog',
    sanskritName: 'Adho Mukha Svanasana',
    description: 'An iconic yoga pose that stretches the shoulders, hamstrings, and calves while strengthening the arms and legs.',
    instructions: [
      'Start on your hands and knees, with hands shoulder-width apart and knees hip-width apart.',
      'Spread your fingers wide and press firmly into your palms.',
      'Exhale and lift your knees off the floor, straightening your legs as much as comfortable.',
      'Bring your body into the shape of an "A."',
      'Press your heels towards the floor (they may not touch).',
      'Let your head hang heavy, and gaze towards your navel or between your feet.',
      'Keep your core engaged to support your spine.',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'downward dog yoga',
    videoUrl: 'https://www.youtube.com/watch?v=j6y2C3iI_iE', // Example video
    benefits: ['Calms the brain and helps relieve stress and mild depression', 'Energizes the body', 'Stretches the shoulders, hamstrings, calves, arches, and hands', 'Strengthens the arms and legs', 'Helps relieve the symptoms of menopause', 'Relieves menstrual discomfort when done with head supported', 'Helps prevent osteoporosis', 'Improves digestion', 'Relieves headache, insomnia, back pain, and fatigue'],
    contraindications: ['Carpal tunnel syndrome', 'High blood pressure or headache (support head on a bolster or block)', 'Late-term pregnancy'],
    category: 'Inversion',
    level: 'Beginner',
  },
  {
    id: 'trikonasana',
    name: 'Triangle Pose',
    sanskritName: 'Trikonasana',
    description: 'A standing pose that stretches the hips, groins, hamstrings, and calves; also strengthens the legs and core.',
    instructions: [
      'Start in Tadasana, then step your feet 3-4 feet apart.',
      'Turn your right foot out 90 degrees and your left foot in slightly.',
      'Align your right heel with your left arch.',
      'Extend your arms parallel to the floor, palms down.',
      'Exhale and reach your right hand towards your right shin, ankle, or the floor. Extend your left arm towards the ceiling.',
      'Keep both legs straight and engage your core.',
      'Turn your gaze towards your left hand, if comfortable for your neck.',
      'Hold for several breaths, then repeat on the other side.',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'triangle pose yoga',
    benefits: ['Stretches hips, groins, hamstrings, calves, shoulders, chest, and spine', 'Strengthens legs and core', 'Stimulates abdominal organs', 'Helps relieve stress', 'Improves digestion', 'Helps relieve symptoms of menopause', 'Relieves backache, especially through second trimester of pregnancy', 'Therapeutic for anxiety, flat feet, infertility, neck pain, osteoporosis, and sciatica'],
    contraindications: ['Headache', 'Diarrhea', 'Low blood pressure', 'High blood pressure (turn head to gaze downward in final pose)', 'Neck problems (don’t turn head to look upward; keep looking straight ahead or down)'],
    category: 'Standing',
    level: 'Intermediate',
  },
  {
    id: 'savasana',
    name: 'Corpse Pose',
    sanskritName: 'Savasana',
    description: 'A restorative pose typically practiced at the end of a yoga session to allow the body to relax and integrate the benefits of the practice.',
    instructions: [
      'Lie flat on your back with your legs extended and arms by your sides, palms facing up.',
      'Allow your feet to fall open naturally.',
      'Close your eyes and relax your entire body, from your toes to the crown of your head.',
      'Release any tension you are holding.',
      'Breathe naturally and allow your mind to be still.',
      'Stay in Savasana for 5-15 minutes.',
    ],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'corpse pose savasana',
    benefits: ['Calms the brain and helps relieve stress and mild depression', 'Relaxes the body', 'Reduces headache, fatigue, and insomnia', 'Helps to lower blood pressure', 'Allows for deep rest and rejuvenation'],
    category: 'Restorative',
    level: 'Beginner',
  }
];

export const getAsanaById = (id: string): Asana | undefined => {
  return asanas.find(asana => asana.id === id);
};
