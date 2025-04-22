
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import { User } from "lucide-react";

interface SuccessStoryCardProps {
  name: string;
  petName: string;
  image: string;
  story: string;
  location: string;
  date: string;
}

export function SuccessStoryCard({ 
  name, 
  petName, 
  image, 
  story, 
  location, 
  date 
}: SuccessStoryCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={`${name} with their adopted pet ${petName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-lavender/20 flex items-center justify-center">
            <User className="h-5 w-5 text-lavender" />
          </div>
          <div>
            <h3 className="font-medium">{name} & {petName}</h3>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
        <CardDescription className="text-right text-xs">{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{story}</p>
      </CardContent>
    </Card>
  );
}
