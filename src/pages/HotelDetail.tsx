
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HotelDetailComponent from "@/components/hotel/HotelDetail";

const HotelDetail = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HotelDetailComponent />
      <Footer />
    </div>
  );
};

export default HotelDetail;
