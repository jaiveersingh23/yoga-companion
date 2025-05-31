import type { PranayamaTechnique } from './types';

export const pranayamaTechniques: PranayamaTechnique[] = [
  {
    id: 'nadi-shodhana',
    name: 'Alternate Nostril Breathing',
    sanskritName: 'Nadi Shodhana',
    description: 'A calming breathing technique that balances the mind and body by purifying the energy channels (nadis).',
    instructions: [
      'Sit comfortably with your spine straight.',
      'Rest your left hand on your left knee.',
      'Bring your right hand to your nose. Fold your index and middle fingers, or rest them lightly between your eyebrows (Vishnu Mudra).',
      'Close your right nostril with your right thumb. Inhale slowly and deeply through your left nostril.',
      'Close your left nostril with your right ring finger. Release your thumb from the right nostril and exhale slowly through the right nostril.',
      'Inhale through the right nostril.',
      'Close the right nostril with your thumb. Release your ring finger from the left nostril and exhale slowly through the left nostril.',
      'This completes one round. Continue for 5-10 rounds.',
    ],
    benefits: ['Calms the mind', 'Reduces anxiety and stress', 'Improves focus and concentration', 'Balances hormones', 'Supports respiratory function', 'Balances the left and right hemispheres of the brain'],
    durationOptions: [3, 5, 10],
    breathingPattern: { inhale: 4, exhale: 6, rounds: 10 }, // Example: 4 count inhale, 6 count exhale
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'pranayama breathing yoga',
  },
  {
    id: 'ujjayi',
    name: 'Victorious Breath',
    sanskritName: 'Ujjayi Pranayama',
    description: 'Also known as "Ocean Breath," Ujjayi involves a gentle constriction at the back of the throat, creating a soft hissing sound. It is warming and calming.',
    instructions: [
      'Sit comfortably with your spine straight or practice during asana.',
      'Inhale and exhale deeply through your nose.',
      'Slightly constrict the back of your throat (glottis), as if you were about to whisper or fog up a mirror.',
      'Maintain this gentle constriction on both inhalation and exhalation.',
      'The breath should create a soft, audible "ocean" sound.',
      'Keep the breath smooth, even, and relaxed.',
      'Practice for several minutes.',
    ],
    benefits: ['Calms the nervous system', 'Builds internal heat', 'Increases oxygenation', 'Improves focus during asana practice', 'Releases tension'],
    durationOptions: [3, 5, 10],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ujjayi breath meditation',
  },
   {
    id: 'bhramari',
    name: 'Bee Breath',
    sanskritName: 'Bhramari Pranayama',
    description: 'A calming breathing practice that involves making a humming sound like a bee, which soothes the nervous system.',
    instructions: [
      'Sit in a comfortable meditative posture with your spine erect.',
      'Close your eyes gently.',
      'Close your ears with your thumbs or index fingers (Shanmukhi Mudra can also be used).',
      'Inhale deeply through your nose.',
      'As you exhale, make a long, steady, low-pitched humming sound from the back of your throat, like a bee.',
      'Feel the vibration in your head and chest.',
      'Continue for 5-10 rounds or as comfortable.',
    ],
    benefits: ['Instantly calms the mind', 'Relieves stress, anxiety, and anger', 'Reduces blood pressure', 'Improves concentration and memory', 'Helpful for insomnia'],
    durationOptions: [3, 5, 7],
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'bee breath yoga sound',
  },
];

export const getPranayamaById = (id: string): PranayamaTechnique | undefined => {
  return pranayamaTechniques.find(p => p.id === id);
};
