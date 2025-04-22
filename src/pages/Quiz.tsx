
import { useState } from "react";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { QuizCard } from "@/components/quiz/quiz-card";
import { quizQuestions, featuredPets } from "@/lib/data";
import { PetCard } from "@/components/pet-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const handleNext = (answer: string) => {
    const newAnswers = { ...answers, [currentStep - 1]: answer };
    setAnswers(newAnswers);
    
    if (currentStep === quizQuestions.length) {
      setQuizCompleted(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleRetakeQuiz = () => {
    setAnswers({});
    setCurrentStep(1);
    setQuizCompleted(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 bg-gray-50">
        {!quizCompleted ? (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-2">Find Your Pawfect Match</h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Answer a few questions about your lifestyle and preferences to help us find
                  the perfect pet companion for you.
                </p>
              </div>
              
              <QuizCard
                question={quizQuestions[currentStep - 1]}
                currentStep={currentStep}
                totalSteps={quizQuestions.length}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isFirstStep={currentStep === 1}
                isLastStep={currentStep === quizQuestions.length}
              />
            </div>
          </section>
        ) : (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold mb-4">Your Pawfect Matches!</h1>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                  Based on your responses, we've found these pets that match your lifestyle and preferences.
                  Each match percentage indicates how well a pet's needs align with what you can provide.
                </p>
                <Button onClick={handleRetakeQuiz} variant="outline" className="mb-8">
                  Retake Quiz
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredPets.map((pet) => (
                  <PetCard
                    key={pet.id}
                    name={pet.name}
                    image={pet.image}
                    age={pet.age}
                    breed={pet.breed}
                    location={pet.location}
                    matchPercentage={pet.matchPercentage}
                  />
                ))}
              </div>
              
              <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">
                  Don't see what you're looking for? Check back regularly as new pets become available.
                </p>
                <Button asChild className="bg-lavender hover:bg-lavender/90">
                  <Link to="/pets">Browse All Pets</Link>
                </Button>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Quiz;
