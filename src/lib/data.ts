
export interface HotelType {
  id: string;
  name: string;
  description: string;
  location: string;
  city: string;
  price: number;
  rating: number;
  reviewCount: number;
  images: string[];
  amenities: string[];
  tags: string[];
  discountPercentage?: number;
}

export const hotels: HotelType[] = [
  {
    id: "1",
    name: "Serene Bay Resort",
    description: "Experience luxury living in this meticulously designed hotel featuring panoramic ocean views, a private beach area, and world-class dining options. Each room offers sophisticated decor with modern amenities and unparalleled comfort.",
    location: "Baga Beach",
    city: "Goa",
    price: 4999,
    rating: 4.8,
    reviewCount: 234,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Swimming Pool", "Free WiFi", "Spa", "24/7 Room Service", "Fitness Center", "Beachfront"],
    tags: ["Beachfront", "Luxury", "Family-friendly"],
    discountPercentage: 15
  },
  {
    id: "2",
    name: "Urban Oasis Hotel",
    description: "A contemporary retreat in the heart of the city. This design-forward hotel combines urban sophistication with tranquil living spaces, offering guests a peaceful sanctuary amid the bustling cityscape.",
    location: "Connaught Place",
    city: "New Delhi",
    price: 3499,
    rating: 4.6,
    reviewCount: 189,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Rooftop Restaurant", "Free WiFi", "Business Center", "Valet Parking", "Airport Shuttle"],
    tags: ["Business", "City Center", "Luxury"]
  },
  {
    id: "3",
    name: "Mountain Retreat Lodge",
    description: "Nestled among majestic peaks, this charming mountain lodge offers breathtaking views and cozy accommodations. Perfect for nature lovers seeking both adventure and relaxation in a serene alpine setting.",
    location: "Mall Road",
    city: "Shimla",
    price: 5999,
    rating: 4.9,
    reviewCount: 312,
    images: [
      "https://images.unsplash.com/photo-1519906450684-b3ff6df2bb1c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Panoramic Views", "Fireplace", "Restaurant", "Hiking Trails", "Spa", "Free WiFi"],
    tags: ["Mountain View", "Romantic", "Nature"],
    discountPercentage: 8
  },
  {
    id: "4",
    name: "Heritage Palace Hotel",
    description: "Step into history at this magnificently restored heritage property. Once a royal residence, this hotel seamlessly blends old-world charm with contemporary luxury, offering a truly regal experience.",
    location: "Lake Pichola",
    city: "Udaipur",
    price: 8999,
    rating: 4.7,
    reviewCount: 276,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Lake View", "Heritage Tours", "Spa", "Multiple Restaurants", "Swimming Pool", "Royal Butler Service"],
    tags: ["Heritage", "Luxury", "Lake View"],
    discountPercentage: 10
  },
  {
    id: "5",
    name: "Coastal Serenity Resort",
    description: "A beachfront paradise offering the perfect blend of relaxation and adventure. Enjoy direct beach access, water sports, and elegant rooms with stunning sea views and modern amenities.",
    location: "Kovalam Beach",
    city: "Kerala",
    price: 6499,
    rating: 4.5,
    reviewCount: 205,
    images: [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602343168117-bb8a12d7c180?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Beachfront", "Infinity Pool", "Spa", "Water Sports", "Yoga Center", "Seafood Restaurant"],
    tags: ["Beach", "Water Sports", "Relaxation"]
  },
  {
    id: "6",
    name: "Tranquil Valley Homestay",
    description: "Experience authentic local hospitality in this charming homestay nestled in a picturesque valley. Enjoy home-cooked meals, cultural experiences, and the warm embrace of a family-run accommodation.",
    location: "Munnar Hills",
    city: "Kerala",
    price: 2499,
    rating: 4.9,
    reviewCount: 157,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506059612708-99d6c258160e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519906450684-b3ff6df2bb1c?q=80&w=1200&auto=format&fit=crop"
    ],
    amenities: ["Organic Garden", "Homemade Food", "Cultural Experiences", "Hiking", "Free WiFi", "Airport Pickup"],
    tags: ["Homestay", "Authentic", "Nature"],
    discountPercentage: 5
  }
];

export const cities = [
  { value: "goa", label: "Goa" },
  { value: "delhi", label: "New Delhi" },
  { value: "shimla", label: "Shimla" },
  { value: "udaipur", label: "Udaipur" },
  { value: "kerala", label: "Kerala" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "jaipur", label: "Jaipur" }
];

export function getHotelById(id: string): HotelType | undefined {
  return hotels.find(hotel => hotel.id === id);
}

export function getHotelsByCity(city: string): HotelType[] {
  if (!city || city === "all") return hotels;
  return hotels.filter(hotel => hotel.city.toLowerCase() === city.toLowerCase());
}
