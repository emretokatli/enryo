
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Calendar, 
  Users, 
  Wifi, 
  Coffee, 
  CheckCircle, 
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getHotelById } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState(id ? getHotelById(id) : undefined);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  
  useEffect(() => {
    if (!hotel) {
      navigate("/");
      return;
    }
    
    // Preload all images
    const imagePromises = hotel.images.map((src, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          resolve();
        };
      });
    });
    
    Promise.all(imagePromises);
    
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, [hotel, navigate]);
  
  if (!hotel) {
    return null;
  }

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
    
  const goToPrevImage = () => {
    setSelectedImageIndex((prev) => 
      prev === 0 ? hotel.images.length - 1 : prev - 1
    );
  };
  
  const goToNextImage = () => {
    setSelectedImageIndex((prev) => 
      prev === hotel.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="container mx-auto pt-24 pb-16 animate-fade-in">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6 pl-0 text-muted-foreground"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Hotels
        </Button>
        
        {/* Hotel Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div>
            <div className="flex items-center mb-2">
              <MapPin className="h-4 w-4 text-brand mr-1" />
              <span className="text-sm text-muted-foreground">
                {hotel.location}, {hotel.city}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{hotel.name}</h1>
            <div className="flex items-center">
              <div className="flex items-center mr-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(hotel.rating) 
                        ? "text-amber-400 fill-amber-400" 
                        : "text-muted"
                    }`}
                  />
                ))}
              </div>
              <span className="text-base font-medium">{hotel.rating}</span>
              <span className="text-sm text-muted-foreground ml-1">
                ({hotel.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex items-end">
              {hotel.discountPercentage && (
                <span className="text-base text-muted-foreground line-through mr-2">
                  {formatPrice(hotel.price)}
                </span>
              )}
              <span className="text-3xl font-bold text-brand">
                {formatPrice(discountedPrice)}
              </span>
              <span className="text-sm text-muted-foreground ml-1">/ night</span>
            </div>
            {hotel.discountPercentage && (
              <Badge className="mt-2 bg-brand text-white font-medium px-2.5 py-1">
                {hotel.discountPercentage}% OFF
              </Badge>
            )}
          </div>
        </div>
        
        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          <div className="md:col-span-2 relative rounded-lg overflow-hidden aspect-[3/2]">
            <div
              className={cn(
                "w-full h-full bg-cover bg-center cursor-pointer",
                imagesLoaded[0] ? "image-loaded" : "image-loading"
              )}
              style={{ backgroundImage: `url(${hotel.images[0]})` }}
              onClick={() => {
                setSelectedImageIndex(0);
                setIsGalleryOpen(true);
              }}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute bottom-3 right-3 bg-white/80 hover:bg-white text-foreground rounded-full w-8 h-8"
              onClick={() => {
                setSelectedImageIndex(0);
                setIsGalleryOpen(true);
              }}
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {hotel.images.slice(1, 3).map((image, index) => (
              <div key={index + 1} className="relative rounded-lg overflow-hidden aspect-square">
                <div
                  className={cn(
                    "w-full h-full bg-cover bg-center cursor-pointer",
                    imagesLoaded[index + 1] ? "image-loaded" : "image-loading"
                  )}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => {
                    setSelectedImageIndex(index + 1);
                    setIsGalleryOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {hotel.images.slice(3, 5).map((image, index) => (
              <div key={index + 3} className="relative rounded-lg overflow-hidden aspect-square">
                <div
                  className={cn(
                    "w-full h-full bg-cover bg-center cursor-pointer",
                    imagesLoaded[index + 3] ? "image-loaded" : "image-loading"
                  )}
                  style={{ backgroundImage: `url(${image})` }}
                  onClick={() => {
                    setSelectedImageIndex(index + 3);
                    setIsGalleryOpen(true);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <h2 className="text-xl font-bold mb-4">About This Hotel</h2>
              <p className="text-muted-foreground mb-6">
                {hotel.description}
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-brand mr-2" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <div className="relative rounded-lg overflow-hidden h-48 md:h-64 mb-4">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-muted-foreground flex flex-col items-center">
                    <MapPin className="h-6 w-6 mb-2" />
                    <span>{hotel.location}, {hotel.city}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Located in {hotel.location}, this hotel offers easy access to local attractions, shopping centers, and dining options.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-4">House Rules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Check-in</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 text-brand mr-2" />
                      From 12:00 PM to 11:00 PM
                    </li>
                    <li className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="h-4 w-4 text-brand mr-2" />
                      ID proof mandatory for all guests
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Check-out</h4>
                  <ul className="space-y-2">
                    <li className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="h-4 w-4 text-brand mr-2" />
                      Until 11:00 AM
                    </li>
                    <li className="text-sm text-muted-foreground flex items-center">
                      <CheckCircle className="h-4 w-4 text-brand mr-2" />
                      Late check-out upon availability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Booking Box */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-bold mb-4">Book Your Stay</h2>
              
              <div className="space-y-4 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-brand" />
                    Check-in Date
                  </label>
                  <Button variant="outline" className="w-full justify-start text-muted-foreground">
                    Select date
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-brand" />
                    Check-out Date
                  </label>
                  <Button variant="outline" className="w-full justify-start text-muted-foreground">
                    Select date
                  </Button>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Users className="h-4 w-4 mr-2 text-brand" />
                    Guests
                  </label>
                  <Button variant="outline" className="w-full justify-start text-muted-foreground">
                    2 Guests
                  </Button>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-sm">Base Price</span>
                  <span className="text-sm">{formatPrice(hotel.price)}</span>
                </div>
                {hotel.discountPercentage && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-sm">Discount</span>
                    <span className="text-sm">- {formatPrice(hotel.price - discountedPrice)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-sm">Taxes & Fees</span>
                  <span className="text-sm">{formatPrice(discountedPrice * 0.18)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{formatPrice(discountedPrice + discountedPrice * 0.18)}</span>
                </div>
              </div>
              
              <Button className="w-full bg-brand hover:bg-brand-dark h-12 text-base transition-all">
                Book Now
              </Button>
              
              <div className="mt-4 bg-green-50 p-3 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-green-800">
                  Free cancellation available up to 24 hours before check-in. Book with confidence!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Fullscreen Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center animate-fade-in">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white hover:bg-white/10 z-10"
            onClick={() => setIsGalleryOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={goToPrevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/10 z-10"
            onClick={goToNextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
          
          <div className="w-full h-full flex items-center justify-center p-8">
            <img 
              src={hotel.images[selectedImageIndex]} 
              alt={hotel.name} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2">
            {hotel.images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === selectedImageIndex ? "bg-white" : "bg-white/40"
                }`}
                onClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HotelDetail;
