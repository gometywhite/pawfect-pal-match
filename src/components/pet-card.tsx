
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface PetCardProps {
  name: string;
  image: string;
  age: string;
  breed: string;
  location: string;
  matchPercentage?: number;
}

export function PetCard({ name, image, age, breed, location, matchPercentage }: PetCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={`${name}, a ${breed} available for adoption`}
          className="object-cover w-full h-full"
        />
        {matchPercentage && (
          <div className="absolute top-3 right-3 bg-lavender text-white text-sm font-medium rounded-full px-2 py-1">
            {matchPercentage}% Match
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Add to favorites</span>
          </Button>
        </div>
        <div className="space-y-1 text-sm text-gray-500">
          <p>{age} • {breed}</p>
          <p>{location}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-lavender hover:bg-lavender/90">View Profile</Button>
      </CardFooter>
    </Card>
  );
}
