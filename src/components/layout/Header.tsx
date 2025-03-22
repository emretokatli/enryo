import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  MenuIcon, 
  X, 
  Search, 
  User, 
  Phone,
  ConciergeBell,
  House,
  Utensils,
  Flame,
  Telescope,
  Binoculars,
  Gem 
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/enryo-blue.svg");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setLogoSrc("/enryo-black.svg");
      } else {
        setIsScrolled(false);
        setLogoSrc("/enryo-blue.svg");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white/90 shadow-sm backdrop-blur-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logoSrc} alt="Enryo Logo" className="h-14" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-lg font-medium text-white hover:text-brand transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/hotels" 
              className="text-lg font-medium text-white hover:text-brand transition-colors"
            >
              Service
            </Link>
            <Link 
              to="/destinations" 
              className="text-lg font-medium text-white hover:text-brand transition-colors"
            >
              Food & Beverage
            </Link>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-sm">
              <Phone className="w-4 h-4 mr-2" />
              <span>1800-203-5969</span>
            </Button>
            <Button variant="outline" size="sm" className="text-sm">
              <User className="w-4 h-4 mr-2" />
              <span>Sign In</span>
            </Button>
            <Button size="sm" className="text-sm bg-brand hover:bg-brand-dark">
              <Search className="w-4 h-4 mr-2" />
              <span>Find Hotels</span>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-slide-down">
          <nav className="flex flex-col space-y-4">
            
            <div className="pt-2">
              <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <House className="w-4 h-4 mr-2" />
                <span>Home</span>
              </Button>
              </Link>
            </div>
            <div className="pt-1">
              <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <ConciergeBell className="w-4 h-4 mr-2" />
                <span>Services</span>
              </Button>
              </Link>
            </div>
            <div className="pt-1">
              <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <Utensils className="w-4 h-4 mr-2" />
                <span>Food & Beverage</span>
              </Button>
              </Link>
            </div>
            <div className="pt-1">
              <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <Flame className="w-4 h-4 mr-2" />
                <span>Spa</span>
              </Button>
              </Link>
            </div>
            <div className="pt-1">
              <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <Gem className="w-4 h-4 mr-2" />
                <span>Special Requests</span>
              </Button>
              </Link>
            </div>
            <div className="pt-2 border-t">
              <Button variant="ghost" size="sm" className="w-full justify-start text-base">
                <User className="w-4 h-4 mr-2" />
                <span>Sign In</span>
              </Button>
            </div>
            <div>
              <Button size="sm" className="w-full justify-start text-base bg-brand hover:bg-brand-dark">
                <Telescope className="w-4 h-4 mr-2" />
                <span>Explore Hotel</span>
              </Button>
            </div>
            <div>
              <Button size="sm" className="w-full justify-start text-base bg-brand hover:bg-brand-dark">
                <Binoculars className="w-4 h-4 mr-2" />
                <span>Discover City</span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
