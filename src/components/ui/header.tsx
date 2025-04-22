
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";
import { Button } from "./button";

export function Header() {
  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <PawPrint className="h-8 w-8 text-lavender" />
          <span className="text-xl font-bold">Pawfect Match</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-lavender transition-colors">
            Home
          </Link>
          <Link to="/quiz" className="text-gray-700 hover:text-lavender transition-colors">
            Find Your Match
          </Link>
          <Link to="/success-stories" className="text-gray-700 hover:text-lavender transition-colors">
            Success Stories
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-lavender transition-colors">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex">Sign In</Button>
          <Button className="bg-lavender hover:bg-lavender/90">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
