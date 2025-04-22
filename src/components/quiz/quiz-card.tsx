
import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface QuizOption {
  value: string;
  label: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface QuizCardProps {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  onNext: (value: string) => void;
  onPrevious: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export function QuizCard({
  question,
  currentStep,
  totalSteps,
  onNext,
  onPrevious,
  isFirstStep,
  isLastStep
}: QuizCardProps) {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleNext = () => {
    onNext(selectedValue);
    setSelectedValue("");
  };
  
  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm font-medium text-lavender">{Math.round((currentStep / totalSteps) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-lavender h-2 rounded-full" 
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        <CardTitle className="mt-4 text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedValue} onValueChange={setSelectedValue}>
          <div className="space-y-4">
            {question.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="flex-1 cursor-pointer py-2">
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={isFirstStep}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!selectedValue}
          className="bg-lavender hover:bg-lavender/90"
        >
          {isLastStep ? "See Results" : "Next"}
        </Button>
      </CardFooter>
    </Card>
  );
}
