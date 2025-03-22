
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Calendar as CalendarIcon, 
  Search, 
  MapPin, 
  Users 
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cities } from "@/lib/data";

const LocationSelector = () => {
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [city, setCity] = useState("");

  return (
    <div className="max-w-6xl mx-auto -mt-16 px-4 relative z-20">
      <div className="bg-white rounded-xl shadow-lg p-6 animate-slide-up">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Location */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-brand" />
              Location
            </label>
            <Select value={city} onValueChange={setCity}>
              <SelectTrigger className="h-12 border-muted">
                <SelectValue placeholder="Select city" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Cities</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city.value} value={city.value}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Check-in Date */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 flex items-center">
              <CalendarIcon className="h-4 w-4 mr-2 text-brand" />
              Check-in Date
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-12 w-full justify-start border-muted font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  {date ? format(date, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/70 flex items-center">
              <Users className="h-4 w-4 mr-2 text-brand" />
              Guests
            </label>
            <Select value={guests} onValueChange={setGuests}>
              <SelectTrigger className="h-12 border-muted">
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5+">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {/* Search Button */}
          <div className="flex items-end">
            <Button className="h-12 w-full bg-brand hover:bg-brand-dark transition-all">
              <Search className="h-4 w-4 mr-2" />
              Search Hotels
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSelector;
