
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import QualitySection from '@/components/QualitySection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <QualitySection />
      <CapabilitiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
