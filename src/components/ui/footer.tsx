import { Link } from "react-router-dom";
import { Heart, PawPrint } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PawPrint className="h-6 w-6 text-lavender" />
              <span className="text-lg font-bold">Pawfect Match</span>
            </div>
            <p className="text-gray-600 mb-4">Connecting hearts, one paw at a time.</p>
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-lavender" />
              <span className="text-sm text-gray-500">Made with love for pets everywhere</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-lavender transition-colors">Home</Link></li>
              <li><Link to="/quiz" className="text-gray-600 hover:text-lavender transition-colors">Find Your Match</Link></li>
              <li><Link to="/success-stories" className="text-gray-600 hover:text-lavender transition-colors">Success Stories</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-lavender transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-lavender transition-colors">Pet Care Tips</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-lavender transition-colors">Adoption Guide</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-lavender transition-colors">Partner Shelters</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-lavender transition-colors">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">info@pawfectmatch.com</li>
              <li className="text-gray-600">(123) 456-7890</li>
              <li className="text-gray-600">2055 Bon Bon St, Irvine, CA 90501</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Pawfect Match. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
