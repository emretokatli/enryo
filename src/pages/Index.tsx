
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import LocationSelector from "@/components/home/LocationSelector";
import FeaturedHotels from "@/components/home/FeaturedHotels";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Clock } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Location Selector */}
        <LocationSelector />
        
        {/* Featured Hotels */}
        <FeaturedHotels />
        
        {/* Why Choose Us */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <span className="inline-block text-sm font-medium text-brand bg-brand-50 rounded-full px-3 py-1 mb-3">
                Why Treebo
              </span>
              <h2 className="text-3xl font-bold mb-4">Experience the Treebo Difference</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover why thousands of travelers choose us for their stay every day.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center animate-slide-up">
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-7 w-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
                <p className="text-muted-foreground">
                  Every Treebo property undergoes a rigorous quality assessment to ensure your comfort.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: "100ms" }}>
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-7 w-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
                <p className="text-muted-foreground">
                  We promise you'll get the best rates with our price match guarantee.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: "200ms" }}>
                <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our dedicated customer support team is available round the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="bg-gradient-to-r from-brand to-brand-light rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <span className="inline-block text-sm font-medium bg-white/20 text-white rounded-full px-3 py-1 mb-4">
                    Special Offer
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Get 15% Off On Your First Booking
                  </h2>
                  <p className="text-white/90 mb-8 max-w-md">
                    Sign up for our newsletter and receive a special discount code for your first stay at any Treebo hotel.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-white text-brand hover:bg-white/90 transition-all">
                      Book Now
                    </Button>
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-all">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="hidden lg:block relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1200&auto=format&fit=crop)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
