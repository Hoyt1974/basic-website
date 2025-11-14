// app/page.tsx
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
// Optional gallery for the “background image OR gallery” intro offer:
import GallerySection from "@/components/GallerySection";

export default function HomePage() {
  return (
    <main className="page-shell">
      <div className="page-inner">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialSection />
        <ContactSection />
        <FooterSection />
      </div>
    </main>
  );
}

