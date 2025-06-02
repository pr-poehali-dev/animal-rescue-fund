import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import AnimalCards from "@/components/AnimalCards";
import HowToHelp from "@/components/HowToHelp";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <AnimalCards />
      <HowToHelp />
      <Footer />
    </div>
  );
};

export default Index;
