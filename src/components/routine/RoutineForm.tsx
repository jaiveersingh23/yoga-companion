"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generatePersonalizedRoutine, type GeneratePersonalizedRoutineInput, type GeneratePersonalizedRoutineOutput } from '@/ai/flows/generate-personalized-routine';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  experienceLevel: z.enum(['Beginner', 'Intermediate', 'Advanced'], {
    required_error: "Please select your experience level."
  }),
  goals: z.string().min(10, "Please describe your goals in at least 10 characters.").max(500, "Goals description is too long."),
  physicalLimitations: z.string().max(500, "Physical limitations description is too long.").optional(),
  duration: z.coerce.number().min(10, "Minimum duration is 10 minutes.").max(120, "Maximum duration is 120 minutes."),
});

type RoutineFormValues = z.infer<typeof formSchema>;

export default function RoutineForm() {
  const [generatedRoutine, setGeneratedRoutine] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<RoutineFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      experienceLevel: undefined,
      goals: '',
      physicalLimitations: '',
      duration: 30,
    },
  });

  const onSubmit: SubmitHandler<RoutineFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedRoutine(null);
    try {
      const input: GeneratePersonalizedRoutineInput = {
        experienceLevel: data.experienceLevel,
        goals: data.goals,
        physicalLimitations: data.physicalLimitations || 'None',
        duration: data.duration,
      };
      const result: GeneratePersonalizedRoutineOutput = await generatePersonalizedRoutine(input);
      setGeneratedRoutine(result.routine);
      toast({
        title: "Routine Generated!",
        description: "Your personalized yoga routine is ready.",
      });
    } catch (error) {
      console.error("Error generating routine:", error);
      toast({
        title: "Error",
        description: "Failed to generate routine. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Create Your Routine</CardTitle>
          <CardDescription>Fill in the details below to get a personalized yoga plan.</CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience Level</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Beginner">Beginner</SelectItem>
                        <SelectItem value="Intermediate">Intermediate</SelectItem>
                        <SelectItem value="Advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Goals</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., stress reduction, flexibility, strength building" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="physicalLimitations"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Physical Limitations (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., knee pain, back problems. Type 'None' if not applicable." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Duration (minutes)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g., 30" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Routine'
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {generatedRoutine && (
        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Your Personalized Routine</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none whitespace-pre-wrap text-foreground">
              {generatedRoutine}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
