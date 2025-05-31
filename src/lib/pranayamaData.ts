
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
  {
    id: 'kapalabhati',
    name: 'Skull Shining Breath',
    sanskritName: 'Kapalabhati Pranayama',
    description: 'A vigorous pranayama technique that cleanses the respiratory system, energizes the body, and clears the mind. It involves forceful exhalations and passive inhalations.',
    instructions: [
      'Sit in a comfortable, stable meditation posture with your spine erect.',
      'Rest your hands on your knees, palms facing up or down.',
      'Take a deep inhale, then begin a series of sharp, forceful exhalations by drawing your abdomen in. Allow the inhalation to happen passively and naturally.',
      'Focus on the exhalation; the inhalation will follow automatically.',
      'Start with a round of 20-30 breaths. Gradually increase the number of breaths per round and the number of rounds.',
      'After each round, take a few normal breaths, or hold the breath out or in if experienced.',
      'Perform 2-3 rounds initially.'
    ],
    benefits: [
      'Cleanses the lungs and respiratory passages',
      'Stimulates abdominal organs and improves digestion',
      'Energizes the body and mind',
      'Increases alertness and concentration',
      'Warms the body',
      'Tones abdominal muscles'
    ],
    contraindications: [
        'High blood pressure', 
        'Heart conditions', 
        'Hernia', 
        'Epilepsy', 
        'Vertigo', 
        'Pregnancy', 
        'Recent abdominal surgery', 
        'During menstruation (practice mildly if at all)'
    ],
    durationOptions: [2, 3, 5], // Duration per session
    breathingPattern: { exhale: 1, rounds: 30 }, // Represents rapid exhalations, passive inhale not counted here.
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'kapalabhati breath energy'
  },
  {
    id: 'sitali',
    name: 'Cooling Breath',
    sanskritName: 'Sitali Pranayama',
    description: 'A pranayama technique that cools the body and mind. It involves inhaling through a curled tongue.',
    instructions: [
      'Sit in a comfortable meditation posture.',
      'Close your eyes and relax your body.',
      'Curl your tongue lengthwise to form a tube. If you cannot curl your tongue, practice Sitkari (hissing breath) by lightly clenching your teeth and inhaling through them.',
      'Extend the curled tongue slightly out of your mouth.',
      'Inhale slowly and deeply through the "tube" of your tongue, as if sipping air through a straw. Feel the coolness of the breath.',
      'Withdraw your tongue and close your mouth. Exhale slowly through your nostrils.',
      'This is one round. Continue for 5-10 rounds, or up to 5 minutes.'
    ],
    benefits: [
      'Cools the body and mind',
      'Reduces stress, anxiety, and agitation',
      'May help lower blood pressure',
      'Quenches thirst',
      'Beneficial for reducing fever and inflammation'
    ],
    contraindications: [
        'Low blood pressure', 
        'Respiratory disorders like asthma or bronchitis (cold air may irritate)', 
        'Chronic constipation', 
        'During cold weather or if you have a cold/flu'
    ],
    durationOptions: [3, 5, 7],
    breathingPattern: { inhale: 4, exhale: 6, rounds: 10 },
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sitali breath cool'
  }
];

export const getPranayamaById = (id: string): PranayamaTechnique | undefined => {
  return pranayamaTechniques.find(p => p.id === id);
};
