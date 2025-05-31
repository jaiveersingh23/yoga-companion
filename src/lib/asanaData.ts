
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
    benefits: ['Calms the brain and helps relieve stress and mild depression', 'Relaxes the body', 'Reduces headache, fatigue, and insomnia', 'Helps to lower blood pressure', 'Allows for deep rest and rejuvenation'],
    category: 'Restorative',
    level: 'Beginner',
  },
  {
    id: 'virabhadrasana-ii',
    name: 'Warrior II Pose',
    sanskritName: 'Virabhadrasana II',
    description: 'A powerful standing pose that builds strength and stamina in the legs and core, and opens the hips and chest.',
    instructions: [
      'Start in Tadasana. Step your feet wide apart, about 4 to 5 feet.',
      'Turn your right foot out 90 degrees and your left foot in slightly (about 15 degrees).',
      'Align your right heel with your left arch.',
      'Bend your right knee over your right ankle, so your shin is perpendicular to the floor. Aim for your right thigh to be parallel to the floor.',
      'Extend your arms parallel to the floor, reaching actively out to your sides. Palms facing down.',
      'Turn your head to the right and gaze over your right fingertips.',
      'Keep your torso upright and shoulders relaxed.',
      'Hold for 30 seconds to a minute. To release, straighten your right leg and switch sides.'
    ],
    benefits: [
      'Strengthens and stretches the legs and ankles',
      'Opens the hips and chest',
      'Builds stamina and concentration',
      'Relieves backaches, especially during pregnancy (second trimester)',
      'Therapeutic for carpal tunnel syndrome, flat feet, infertility, osteoporosis, and sciatica'
    ],
    contraindications: [
      'High blood pressure',
      'Neck problems (keep head neutral, don’t turn to gaze over fingertips)'
    ],
    category: 'Standing',
    level: 'Beginner',
  },
  {
    id: 'vrksasana',
    name: 'Tree Pose',
    sanskritName: 'Vrksasana',
    description: 'A balancing pose that improves focus, concentration, and strengthens the legs and core.',
    instructions: [
      'Begin in Tadasana.',
      'Shift your weight to your left foot. Bend your right knee and place the sole of your right foot on your inner left thigh, avoiding the knee joint.',
      'Press your right foot into your thigh and your thigh back into your foot.',
      'Bring your hands to your heart center in Anjali Mudra (prayer position), or extend them overhead.',
      'Find a non-moving point to gaze at to help with balance.',
      'Keep your standing leg strong and engaged.',
      'Hold for several breaths, then gently release and repeat on the other side.'
    ],
    benefits: [
      'Strengthens thighs, calves, ankles, and spine',
      'Stretches the groins and inner thighs, chest and shoulders',
      'Improves sense of balance',
      'Relieves sciatica and reduces flat feet',
      'Calms and focuses the mind'
    ],
    contraindications: [
      'Headache',
      'Insomnia',
      'Low blood pressure',
      'High blood pressure (do not raise arms overhead)'
    ],
    category: 'Balancing',
    level: 'Beginner',
  },
  {
    id: 'bhujangasana',
    name: 'Cobra Pose',
    sanskritName: 'Bhujangasana',
    description: 'A gentle backbend that strengthens the spine, chest, and abdomen.',
    instructions: [
      'Lie prone on the floor. Stretch your legs back, tops of the feet on the floor.',
      'Place your hands under your shoulders, fingers pointing forward.',
      'Hug your elbows into your body.',
      'Press the tops of your feet, thighs, and pubis firmly into the floor.',
      'On an inhalation, begin to straighten the arms to lift the chest off the floor, going only to the height at which you can maintain a connection through your pubis to your legs.',
      'Keep your shoulders relaxed and away from your ears.',
      'Gaze slightly upward or straight ahead, avoiding crunching the neck.',
      'Hold for 15 to 30 seconds, breathing easily. Exhale to release back to the floor.'
    ],
    benefits: [
      'Strengthens the spine',
      'Stretches chest and lungs, shoulders, and abdomen',
      'Firms the buttocks',
      'Stimulates abdominal organs',
      'Helps relieve stress and fatigue',
      'Opens the heart and lungs',
      'Soothes sciatica',
      'Therapeutic for asthma'
    ],
    contraindications: [
      'Back injury',
      'Carpal tunnel syndrome',
      'Headache',
      'Pregnancy'
    ],
    category: 'Prone',
    level: 'Beginner',
  },
  {
    id: 'balasana',
    name: "Child's Pose",
    sanskritName: 'Balasana',
    description: 'A gentle resting pose that calms the brain and helps relieve stress and fatigue. It gently stretches the hips, thighs, and ankles.',
    instructions: [
      'Kneel on the floor. Touch your big toes together and sit on your heels, then separate your knees as wide as your hips.',
      'Exhale and lay your torso down between your thighs.',
      'Extend your arms forward alongside your ears with your palms down on the floor, or bring your arms back alongside your torso with palms facing up.',
      'Rest your forehead gently on the floor.',
      'Allow your shoulders to relax towards the earth.',
      'Hold for 30 seconds to a few minutes, breathing softly.'
    ],
    benefits: [
      'Gently relaxes the muscles on the front of the body while softly stretching the muscles of the back torso.',
      'Calms the brain and helps relieve stress and fatigue.',
      'Relieves back and neck pain when done with head and torso supported.',
      'Gently stretches the hips, thighs, and ankles.'
    ],
    contraindications: [
      'Diarrhea',
      'Pregnancy (unless knees are spread wide to accommodate the belly)',
      'Knee injury (avoid if it causes pain)'
    ],
    category: 'Restorative',
    level: 'Beginner',
  },
  {
    id: 'marjaryasana-bitilasana',
    name: 'Cat-Cow Stretch',
    sanskritName: 'Marjaryasana to Bitilasana',
    description: 'A dynamic duo of poses that warms the body and brings flexibility to the spine. It involves flowing between arching and rounding the back.',
    instructions: [
      'Start on your hands and knees in a tabletop position. Wrists directly under shoulders, and knees directly under hips.',
      'Cow Pose (Bitilasana): Inhale as you drop your belly towards the floor. Lift your chest and tailbone towards the ceiling, allowing your gaze to gently lift.',
      'Cat Pose (Marjaryasana): Exhale as you draw your belly to your spine and round your back toward the ceiling. Release your head toward the floor, but don’t force your chin to your chest.',
      'Continue flowing gently between Cow and Cat poses, coordinating your breath with your movement.',
      'Repeat for 5-10 breaths or as comfortable.'
    ],
    benefits: [
      'Increases coordination.',
      'Stretches the hips, abdomen, and back.',
      'Improves posture and balance.',
      'Creates emotional balance.',
      'Relieves stress and calms the mind.',
      'Stimulates digestive organs.'
    ],
    contraindications: [
      'Recent or chronic back pain or injury (consult a doctor).',
      'Neck injury (keep head in line with the torso, do not drop or lift).'
    ],
    category: 'Seated', 
    level: 'Beginner',
  },
  {
    id: 'setu-bandhasana',
    name: 'Bridge Pose',
    sanskritName: 'Setu Bandhasana',
    description: 'A gentle backbend that opens the chest, stretches the neck and spine, and can calm the brain.',
    instructions: [
      'Lie supine on the floor, bend your knees and set your feet on the floor, heels as close to the sitting bones as possible.',
      'Exhale and, pressing your inner feet and arms actively into the floor, lift your hips up toward the ceiling.',
      'Keep your thighs and inner feet parallel. Clasp your hands below your pelvis and extend through the arms to help you stay on the tops of your shoulders.',
      'Lift your chin slightly away from your sternum and, firming the shoulder blades against your back, press the top of the sternum toward the chin.',
      'Hold for 30 seconds to 1 minute. Release with an exhalation, rolling the spine slowly down onto the floor.'
    ],
    benefits: [
      'Stretches the chest, neck, spine, and hips.',
      'Strengthens the back, buttocks, and hamstrings.',
      'Improves circulation of blood.',
      'Helps alleviate stress and mild depression.',
      'Calms the brain and central nervous system.',
      'Stimulates lungs, thyroid glands, and abdominal organs.',
      'Improves digestion.'
    ],
    contraindications: [
      'Neck injury (avoid this pose unless you are practicing under the supervision of an experienced teacher).',
      'Late-term pregnancy.'
    ],
    category: 'Supine',
    level: 'Beginner',
  }
];

export const getAsanaById = (id: string): Asana | undefined => {
  return asanas.find(asana => asana.id === id);
};
