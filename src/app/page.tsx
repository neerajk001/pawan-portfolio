import Brand from "@/components/Brand";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurProcess from "@/components/OurProcess"
import ContactForm from "@/components/ContactForm"


export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f7ed]">
        <Navbar/>
        <Hero/>
        <Brand/>
       
        <FeaturedWork/>
        <OurProcess/>
        <ContactForm/>
    </div>
  );
}
