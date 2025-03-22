
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star, MapPin } from "lucide-react";
import { HotelType } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface HotelCardProps {
  hotel: HotelType;
  className?: string;
}

export const HotelCard = ({ hotel, className }: HotelCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.src = hotel.images[0];
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [hotel.images]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const discountedPrice = hotel.discountPercentage 
    ? Math.round(hotel.price * (1 - hotel.discountPercentage / 100)) 
    : hotel.price;

  return (
    <Link to={`/hotel/${hotel.id}`} className={cn("block", className)}>
      <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 card-hover animate-scale-in">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div 
            className={cn(
              "w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105",
              imageLoaded ? "image-loaded" : "image-loading"
            )}
            style={{ backgroundImage: `url(${hotel.images[0]})` }}
          />
          
          {/* Discount Badge */}
          {hotel.discountPercentage && (
            <div className="absolute top-4 left-4 z-10">
              <Badge className="bg-brand text-white font-medium px-2.5 py-1">
                {hotel.discountPercentage}% OFF
              </Badge>
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-5">
          {/* Location */}
          <div className="flex items-center mb-2">
            <MapPin className="h-4 w-4 text-brand mr-1" />
            <span className="text-xs text-muted-foreground">
              {hotel.location}, {hotel.city}
            </span>
          </div>
          
          {/* Name */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-brand transition-colors">
            {hotel.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(hotel.rating) 
                      ? "text-amber-400 fill-amber-400" 
                      : "text-muted"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium">{hotel.rating}</span>
            <span className="text-xs text-muted-foreground ml-1">
              ({hotel.reviewCount} reviews)
            </span>
          </div>
          
          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mb-4">
            {hotel.amenities.slice(0, 3).map((amenity) => (
              <span 
                key={amenity} 
                className="text-xs px-2 py-1 bg-slate-50 rounded-full text-muted-foreground"
              >
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="text-xs px-2 py-1 bg-slate-50 rounded-full text-muted-foreground">
                +{hotel.amenities.length - 3} more
              </span>
            )}
          </div>
          
          {/* Price */}
          <div className="flex items-end justify-between mt-auto">
            <div>
              {hotel.discountPercentage && (
                <span className="text-sm text-muted-foreground line-through mr-2">
                  {formatPrice(hotel.price)}
                </span>
              )}
              <span className="text-xl font-bold text-brand">
                {formatPrice(discountedPrice)}
              </span>
              <span className="text-xs text-muted-foreground ml-1">/ night</span>
            </div>
            <span className="text-xs font-medium text-brand-dark bg-brand-50 px-2 py-1 rounded">
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
