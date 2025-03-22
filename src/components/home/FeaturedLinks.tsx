import React from 'react';
import { Button } from "@/components/ui/button";

interface FeaturedSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  href: string;
  height?: string;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  title,
  subtitle,
  imageSrc,
  href,
  height = 'h-48',
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden ${height} group`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center p-4 ">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <h1 className="text-xl rounded-xl backdrop-blur-sm px-6 text-base font-bold bg-white/10 text-white border-white/20 hover:bg-white/20 transition-all">{title}</h1>
        </div>
        
      </div>
      
      {/* Button that covers the entire area */}
      <Button 
        variant="link" 
        className="absolute inset-0 w-full h-full p-0 text-transparent hover:text-transparent focus:text-transparent" 
        onClick={() => window.location.href = href}
        aria-label={title}
      >
        {title}
      </Button>
    </div>
  );
};

const WeatherDisplay: React.FC = () => {
  return (
    <div className="items-center bg-white rounded-xl p-6 flex flex-col justify-center h-48">
      <p className="text-gray-700 text-lg">Augsburg</p>
      <div className="mt-2">
        <span className="text-5xl font-light text-gray-800">18°C</span>
      </div>
      <div className="mt-4 flex gap-4 text-sm text-gray-600">
        <span>↑18°C</span>
        <span>↓8°C</span>
      </div>
    </div>
  );
};

const FeaturedLinks: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Summer Special Section */}
          <FeaturedSection
          title="Services"
          imageSrc="/gs.jpg"
          href="/services"
        />

        {/* Food & Drink Section */}
        <FeaturedSection
          title="Food & Drinks "
          subtitle="Delivered, or Collected"
          imageSrc="/reservation.jpg"
          href="/food-drink"
        />


        {/* Discover London Section */}
        <FeaturedSection
          title="Discover Augsburg"
          subtitle="Hand picked experiences"
          imageSrc="/city.png"
          href="/city-tour"
        />

        <FeaturedSection
            title="Reservation"
            subtitle="We can help"
            imageSrc="/bg.jpg"
            href="/reservation"
          />


        {/* Bottom row with Requests and Weather */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">   
          {/* <WeatherDisplay /> */}
        </div>


      </div>
    </div>
  );
};

export default FeaturedLinks;