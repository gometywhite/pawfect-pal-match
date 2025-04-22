
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { SuccessStoryCard } from "@/components/success-story-card";
import { successStories } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { PawPrint, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const SuccessStories = () => {
  // More success stories in addition to the ones on the homepage
  const additionalStories = [
    {
      id: 4,
      name: "David",
      petName: "Rocky",
      image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=500&auto=format&fit=crop",
      story: "As a senior citizen, I wanted a calm companion. Rocky, an older dog himself, has been the perfect match. We enjoy our slow walks and quiet evenings together.",
      location: "Seattle, WA",
      date: "Matched February 2024"
    },
    {
      id: 5,
      name: "Taylor",
      petName: "Mittens",
      image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=500&auto=format&fit=crop",
      story: "I work from home and needed a low-maintenance companion. Mittens is perfect - she's independent but still loves to curl up next to me while I work.",
      location: "Austin, TX",
      date: "Matched April 2024"
    },
    {
      id: 6,
      name: "The Johnson Family",
      petName: "Bailey",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=500&auto=format&fit=crop",
      story: "With three kids, we needed a patient and energetic dog. Bailey has been amazing with the children and loves joining our weekend adventures.",
      location: "Minneapolis, MN",
      date: "Matched January 2024"
    }
  ];

  const allStories = [...successStories, ...additionalStories];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-lemoncream py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Read heartwarming stories from people who found their perfect companions through Pawfect Match.
              Every match creates a unique bond and a beautiful story.
            </p>
          </div>
        </section>
        
        {/* Featured Testimonial */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto">
            <div className="bg-peach rounded-2xl p-8 relative">
              <div className="absolute -top-6 left-10">
                <div className="bg-white rounded-full p-4 shadow-md">
                  <Quote className="h-8 w-8 text-lavender" />
                </div>
              </div>
              
              <div className="mt-6 md:flex items-center gap-10">
                <div className="md:w-1/3 mb-6 md:mb-0">
                  <img 
                    src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?q=80&w=500&auto=format&fit=crop"
                    alt="Jessica and Max"
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-xl italic text-gray-700 mb-4">
                    "I never thought a pet matching service could be so accurate! Max and I were matched at 97% 
                    compatibility, and from the moment we met, it was like we'd known each other forever. 
                    He's exactly what I needed - energetic when it's time to play, but calm when I need to work. 
                    The matching process considered aspects of compatibility I wouldn't have thought of myself."
                  </blockquote>
                  <p className="font-bold text-lg">Jessica & Max</p>
                  <p className="text-gray-600">Portland, OR • Matched October 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Story Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allStories.map((story) => (
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-skyblue">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <PawPrint className="h-16 w-16 text-lavender" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Own Success Story?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Take our compatibility quiz and discover the pet that's perfect for your lifestyle.
              Your own heartwarming story is waiting to begin!
            </p>
            <Button className="bg-lavender hover:bg-lavender/90" size="lg" asChild>
              <Link to="/quiz">Find Your Match</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SuccessStories;
