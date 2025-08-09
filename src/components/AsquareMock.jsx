// AsquareMock.jsx
import { useState } from 'react';
import CoursesSection from './CoursesSection';
import GroupDiscountSection from './DiscountSection';
import Footer from './Footer';
import Header from './Header';
import Hero from './HeroSection';
import BlogNewsSection from './NewsSection';
import Partners from './PartnersSection';
import PlacementSection from './PlacementsSection';
import ProjectsSection from './ProjectsSection';
import ReviewSection from './ReviewSection';
import TestimonialSection from './TestimonialSection';
import WhyUs from './WhySection';

export default function AsquareMock() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        sectionSelect={scrollToSection}
        setMenu={setIsMenuOpen}
        isMenu={isMenuOpen}
      />
      <Hero />
      <Partners />
      <ReviewSection />
      <PlacementSection />
      <WhyUs />
      <CoursesSection />
      <ProjectsSection />
      <TestimonialSection />
      <GroupDiscountSection />
      <BlogNewsSection />
      <Footer />
    </div>
  );
}
