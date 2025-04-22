
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { PetCard } from "@/components/pet-card";
import { SuccessStoryCard } from "@/components/success-story-card";
import { featuredPets, successStories } from "@/lib/data";
import { ArrowRight, PawPrint, Heart, Search, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-peach to-skyblue py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Find Your Pawfect Match
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Connecting hearts and paws through personalized matching.
              Discover your ideal companion based on lifestyle and personality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-lavender hover:bg-lavender/90 text-white"
                size="lg"
                asChild
              >
                <Link to="/quiz">Take the Quiz</Link>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                asChild
              >
                <Link to="/about">How It Works</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=800&auto=format&fit=crop"
              alt="Happy pet adoption"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-mintgreen">
        <div className="container mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Pawfect Match Works</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our unique matching system helps you find the perfect pet companion based on
            compatibility, not just cute photos.
          </p>
        </div>
        
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-lemoncream rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-lavender" />
            </div>
            <h3 className="text-xl font-bold mb-2">1. Take the Quiz</h3>
            <p className="text-gray-700">
              Answer questions about your lifestyle, preferences, and personality to help us understand
              what type of pet would be your ideal match.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-lemoncream rounded-full flex items-center justify-center mx-auto mb-4">
              <PawPrint className="h-8 w-8 text-lavender" />
            </div>
            <h3 className="text-xl font-bold mb-2">2. Get Matched</h3>
            <p className="text-gray-700">
              Our algorithm analyzes your responses and matches you with pets whose needs and
              personalities are compatible with your lifestyle.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-lemoncream rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-lavender" />
            </div>
            <h3 className="text-xl font-bold mb-2">3. Meet & Adopt</h3>
            <p className="text-gray-700">
              Connect with the shelter or rescue organization, arrange a meeting with your matched
              pet, and start your journey together!
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Pets */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Matches</h2>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link to="/pets">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
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
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-skyblue">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Pawfect Match?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our science-based matching system results in happier pets and pet parents.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Higher Success Rate</h3>
                <p className="text-gray-700">
                  Our matches have a 95% success rate, with fewer returns to shelters than
                  traditional adoption methods.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Access to Multiple Shelters</h3>
                <p className="text-gray-700">
                  Search across our network of 500+ partner shelters and rescue organizations
                  in one place.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Personalized Experience</h3>
                <p className="text-gray-700">
                  Receive curated matches based on your unique lifestyle and preferences.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Expert Support</h3>
                <p className="text-gray-700">
                  Access advice from animal behaviorists and adoption specialists throughout your journey.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Regular Updates</h3>
                <p className="text-gray-700">
                  Receive notifications when new potential matches become available at partner shelters.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Check className="h-6 w-6 text-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Follow-Up Support</h3>
                <p className="text-gray-700">
                  Get resources and guidance after adoption to ensure a smooth transition for you and your pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Success Stories</h2>
            <Button variant="outline" className="flex items-center gap-2" asChild>
              <Link to="/success-stories">
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <SuccessStoryCard
                key={story.id}
                name={story.name}
                petName={story.petName}
                image={story.image}
                story={story.story}
                location={story.location}
                date={story.date}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-peach">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Meet Your Pawfect Match?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Take our compatibility quiz and discover pets that match your lifestyle and personality.
            Your new best friend is waiting!
          </p>
          <Button 
            className="bg-lavender hover:bg-lavender/90 text-white" 
            size="lg"
            asChild
          >
            <Link to="/quiz">Start the Quiz Now</Link>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
