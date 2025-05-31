'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating personalized yoga routines based on user input.
 *
 * generatePersonalizedRoutine - A function that generates a personalized yoga routine.
 * GeneratePersonalizedRoutineInput - The input type for the generatePersonalizedRoutine function.
 * GeneratePersonalizedRoutineOutput - The return type for the generatePersonalizedRoutine function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedRoutineInputSchema = z.object({
  experienceLevel: z
    .enum(['Beginner', 'Intermediate', 'Advanced'])
    .describe('The user\u2019s experience level with yoga.'),
  goals: z
    .string()
    .describe(
      'The user\u2019s goals for their yoga practice, e.g., stress reduction, flexibility, strength building.'
    ),
  physicalLimitations: z
    .string()
    .describe(
      'Any physical limitations or injuries the user has, e.g., knee pain, back problems.'
    ),
  duration: z
    .number()
    .describe('The desired duration of the yoga routine in minutes.'),
});
export type GeneratePersonalizedRoutineInput = z.infer<
  typeof GeneratePersonalizedRoutineInputSchema
>;

const GeneratePersonalizedRoutineOutputSchema = z.object({
  routine: z
    .string()
    .describe('A personalized yoga routine based on the user\u2019s input.'),
});
export type GeneratePersonalizedRoutineOutput = z.infer<
  typeof GeneratePersonalizedRoutineOutputSchema
>;

export async function generatePersonalizedRoutine(
  input: GeneratePersonalizedRoutineInput
): Promise<GeneratePersonalizedRoutineOutput> {
  return generatePersonalizedRoutineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedRoutinePrompt',
  input: {schema: GeneratePersonalizedRoutineInputSchema},
  output: {schema: GeneratePersonalizedRoutineOutputSchema},
  prompt: `You are an expert yoga instructor. Generate a personalized yoga routine based on the user's experience level, goals, physical limitations, and desired duration. The routine should be clear and easy to follow.

Experience Level: {{{experienceLevel}}}
Goals: {{{goals}}}
Physical Limitations: {{{physicalLimitations}}}
Duration: {{{duration}}} minutes`,
});

const generatePersonalizedRoutineFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedRoutineFlow',
    inputSchema: GeneratePersonalizedRoutineInputSchema,
    outputSchema: GeneratePersonalizedRoutineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
