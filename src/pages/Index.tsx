import { Navbar } from '@/components/Navbar';
import { HeroCarousel } from '@/components/HeroCarousel';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Team } from '@/components/Team';
import { Insights } from '@/components/Insights';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroCarousel />
        <Services />
        <About />
        <Team />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
