
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Heart, PawPrint, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-mintgreen to-lemoncream py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6">About Pawfect Match</h1>
              <p className="text-xl text-gray-700">
                We're on a mission to revolutionize pet adoption by creating perfect matches between
                pets and their forever homes through science-based compatibility matching.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="md:flex items-center gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img 
                  src="https://images.unsplash.com/photo-1551730459-92db2a308d6a?q=80&w=600&auto=format&fit=crop"
                  alt="Founder with rescued pets"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Pawfect Match was born from a simple observation: too many pet adoptions weren't working out
                  because the match between pet and owner wasn't right, leading to returns and more stress for
                  the animals.
                </p>
                <p className="text-gray-700 mb-4">
                  Our founder, a veterinarian and animal behaviorist, saw firsthand how matching pets with 
                  owners based on compatibility—not just cute photos—led to more successful, lasting relationships.
                </p>
                <p className="text-gray-700">
                  Since our launch in 2023, we've helped create over 5,000 successful matches and partnered with
                  500+ shelters nationwide, reducing return rates by 75% compared to traditional adoption methods.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How Pawfect Match Works</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Our unique matching process combines behavioral science, pet expertise, and modern technology
                to find the perfect match between pets and potential owners.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lavender/30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                      <div className="h-6 w-6 bg-lavender rounded-full"></div>
                    </div>
                    <div className="md:flex items-center justify-between">
                      <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 md:text-right">
                        <h3 className="text-xl font-bold mb-2">The Compatibility Quiz</h3>
                        <p className="text-gray-700">
                          Our detailed questionnaire helps us understand your lifestyle, living situation,
                          activity level, and preferences to determine what type of pet would thrive in your care.
                        </p>
                      </div>
                      <div className="md:w-5/12 md:pl-12">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <BookOpen className="h-8 w-8 text-lavender mb-2" />
                          <p className="text-sm text-gray-600">
                            We consider over 25 different factors in our matching algorithm, from your work schedule
                            to your living space and energy level.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                      <div className="h-6 w-6 bg-lavender rounded-full"></div>
                    </div>
                    <div className="md:flex items-center justify-between">
                      <div className="md:w-5/12 md:pr-12 order-last md:order-first">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <PawPrint className="h-8 w-8 text-lavender mb-2" />
                          <p className="text-sm text-gray-600">
                            Every shelter pet in our network undergoes a behavioral assessment to understand their
                            temperament, needs, and ideal living conditions.
                          </p>
                        </div>
                      </div>
                      <div className="md:w-5/12 md:pl-12 md:text-right mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Pet Profiling</h3>
                        <p className="text-gray-700">
                          We work with shelters to create detailed profiles of each pet, including personality traits,
                          activity needs, compatibility with other animals, and special care requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                      <div className="h-6 w-6 bg-lavender rounded-full"></div>
                    </div>
                    <div className="md:flex items-center justify-between">
                      <div className="md:w-5/12 mb-6 md:mb-0 md:pr-12 md:text-right">
                        <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
                        <p className="text-gray-700">
                          Our proprietary algorithm compares your profile with available pets to identify potential
                          matches with the highest compatibility scores, prioritizing long-term success.
                        </p>
                      </div>
                      <div className="md:w-5/12 md:pl-12">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <Heart className="h-8 w-8 text-lavender mb-2" />
                          <p className="text-sm text-gray-600">
                            Unlike other adoption platforms, we don't just show you every available pet—we present
                            animals that are truly compatible with your specific situation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4 */}
                  <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                      <div className="h-6 w-6 bg-lavender rounded-full"></div>
                    </div>
                    <div className="md:flex items-center justify-between">
                      <div className="md:w-5/12 md:pr-12 order-last md:order-first">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <Users className="h-8 w-8 text-lavender mb-2" />
                          <p className="text-sm text-gray-600">
                            We stay connected after adoption with resources, tips, and check-ins to ensure a smooth
                            transition for both you and your new pet.
                          </p>
                        </div>
                      </div>
                      <div className="md:w-5/12 md:pl-12 md:text-right mb-6 md:mb-0">
                        <h3 className="text-xl font-bold mb-2">Guided Adoption & Follow-Up</h3>
                        <p className="text-gray-700">
                          We connect you with the shelter, provide pre-adoption guidance, and offer post-adoption
                          support to help integrate your new pet into your home.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Impact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-peach">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Through science-based matching, we're creating happier homes for pets and owners while
                supporting the hard work of shelters and rescue organizations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-lavender mb-2">5,000+</div>
                <p className="text-gray-700">Successful Matches</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-lavender mb-2">500+</div>
                <p className="text-gray-700">Partner Shelters</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-lavender mb-2">75%</div>
                <p className="text-gray-700">Reduced Return Rate</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-skyblue">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Pawfect Match?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Take our compatibility quiz and discover the pet that's perfect for your lifestyle.
              Your forever friend is waiting!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-lavender hover:bg-lavender/90" size="lg" asChild>
                <Link to="/quiz">Take the Quiz</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/success-stories">Read Success Stories</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
