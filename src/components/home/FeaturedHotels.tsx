
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { hotels } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { HotelCard } from "@/components/hotel/HotelCard";

const FeaturedHotels = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleHotels, setVisibleHotels] = useState(hotels);
  
  // Filter hotels by tab
  useEffect(() => {
    if (activeTab === "all") {
      setVisibleHotels(hotels);
    } else {
      const filtered = hotels.filter(hotel => 
        hotel.tags.some(tag => tag.toLowerCase() === activeTab.toLowerCase())
      );
      setVisibleHotels(filtered.length ? filtered : hotels);
    }
  }, [activeTab]);

  const tabs = [
    { id: "all", label: "All" },
    { id: "luxury", label: "Luxury" },
    { id: "beachfront", label: "Beachfront" },
    { id: "family-friendly", label: "Family-Friendly" },
    { id: "business", label: "Business" }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <span className="inline-block text-sm font-medium text-brand bg-brand-50 rounded-full px-3 py-1 mb-3">
            Featured Properties
          </span>
          <h2 className="text-3xl font-bold mb-4">Discover Our Best Hotels</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of premium accommodations across India's most sought-after destinations.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex items-center justify-center space-x-2 mb-8 overflow-x-auto pb-4 hide-scrollbar">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeTab === tab.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full text-sm px-4 ${
                activeTab === tab.id 
                  ? "bg-brand hover:bg-brand-dark" 
                  : "border-muted hover:border-brand/50"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>
        
        {/* Hotel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Hotels
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
