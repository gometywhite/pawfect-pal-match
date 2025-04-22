
// Mock data for pets
export const featuredPets = [
  {
    id: 1,
    name: "Luna",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop",
    age: "2 years",
    breed: "Domestic Shorthair",
    location: "Happy Paws Shelter, Portland",
    matchPercentage: 98
  },
  {
    id: 2,
    name: "Max",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=500&auto=format&fit=crop",
    age: "3 years",
    breed: "Golden Retriever",
    location: "Furry Friends Rescue, Seattle",
    matchPercentage: 95
  },
  {
    id: 3,
    name: "Bella",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=500&auto=format&fit=crop",
    age: "1 year",
    breed: "Labrador Mix",
    location: "Paws & Claws Shelter, Denver",
    matchPercentage: 92
  },
  {
    id: 4,
    name: "Oliver",
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=500&auto=format&fit=crop",
    age: "4 years",
    breed: "Maine Coon",
    location: "Feline Rescue Center, Austin",
    matchPercentage: 89
  }
];

// Mock data for success stories
export const successStories = [
  {
    id: 1,
    name: "Sophia",
    petName: "Whiskers",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?q=80&w=500&auto=format&fit=crop",
    story: "I never thought I'd find a cat that matches my personality so well! Whiskers has been my work-from-home buddy for a year now, and I can't imagine life without her.",
    location: "Boston, MA",
    date: "Matched June 2024"
  },
  {
    id: 2,
    name: "Michael",
    petName: "Buddy",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?q=80&w=500&auto=format&fit=crop",
    story: "As a runner, I needed an energetic companion. Pawfect Match connected me with Buddy, and we've been on countless trails together since. The compatibility quiz was spot on!",
    location: "Denver, CO",
    date: "Matched March 2024"
  },
  {
    id: 3,
    name: "Emma & James",
    petName: "Daisy",
    image: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?q=80&w=500&auto=format&fit=crop",
    story: "We were looking for a calm dog that would fit into our apartment lifestyle. Daisy has been perfect - she loves our short walks and is happy to cuddle on the couch afterward.",
    location: "Chicago, IL",
    date: "Matched May 2024"
  }
];

// Quiz questions
export const quizQuestions = [
  {
    question: "What type of pet are you looking for?",
    options: [
      { value: "dog", label: "Dog" },
      { value: "cat", label: "Cat" },
      { value: "small-animal", label: "Small Animal (rabbit, guinea pig, etc.)" },
      { value: "no-preference", label: "No preference - I'm open to any pet" }
    ]
  },
  {
    question: "How would you describe your living space?",
    options: [
      { value: "apartment", label: "Apartment/Condo with no yard" },
      { value: "small-house", label: "Small house with a yard" },
      { value: "large-house", label: "Large house with a spacious yard" },
      { value: "rural", label: "Rural property with lots of outdoor space" }
    ]
  },
  {
    question: "How much time can you spend with your pet each day?",
    options: [
      { value: "little", label: "Less than 1 hour - I have a busy schedule" },
      { value: "some", label: "1-3 hours - I have some free time daily" },
      { value: "lots", label: "4+ hours - I have plenty of time to dedicate" },
      { value: "always", label: "Most of the day - I work from home/am home often" }
    ]
  },
  {
    question: "What's your activity level like?",
    options: [
      { value: "sedentary", label: "Sedentary - I prefer relaxing at home" },
      { value: "moderate", label: "Moderate - Daily walks and some outdoor activities" },
      { value: "active", label: "Active - I exercise regularly and enjoy outdoors" },
      { value: "very-active", label: "Very active - I'm always on the go and adventurous" }
    ]
  },
  {
    question: "Do you have other pets or children at home?",
    options: [
      { value: "no-pets-no-kids", label: "No other pets or children" },
      { value: "pets-no-kids", label: "Other pets but no children" },
      { value: "kids-no-pets", label: "Children but no other pets" },
      { value: "pets-and-kids", label: "Both other pets and children" }
    ]
  }
];
