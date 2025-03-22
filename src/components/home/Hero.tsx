
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setImageLoaded(false);
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const img = new Image();
    img.src = heroImages[currentImage];
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [currentImage]);

  return (
    <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className={`absolute inset-0 bg-cover bg-center ${
                imageLoaded ? "image-loaded" : "image-loading"
              }`}
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in">
        <div className="bg-white/10 backdrop-blur-sm p-2 inline-block rounded-full mb-3">
          <span className="text-sm font-medium text-white px-3 py-1 rounded-full">
            Special Offer: 15% Off on Selected Hotels
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
          Discover the Perfect Stay for Your Journey
        </h1>
{/*         <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience comfort and luxury with our curated selection of premium hotels across India. Book now for the best rates guaranteed.
        </p> */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button className="h-12 px-6 text-base font-medium bg-brand hover:bg-brand-dark transition-all">
            Explore Hotels
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="backdrop-blur-sm h-12 px-6 text-base font-medium bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all">
            View Special Offers
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
