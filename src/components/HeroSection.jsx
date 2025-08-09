import { Award, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: 'Best Analytics Training Institute in Kochi',
      subtitle: 'Driving Success through Skill-Based Learning',
      description:
        'Asquare Technologies is a leading Training and Consulting firm specializing in Job-Oriented Diploma Courses, Industry-Grade Internships and World-Class Analytics Solutions.',
      backgroundImage:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      techLogos: [
        'Excel',
        'Alteryx',
        'Tableau',
        'QlikSense',
        'Python',
        'Salesforce',
      ],
      primaryColor: 'from-blue-600 to-purple-700',
    },
    {
      id: 2,
      title: 'Best Gen AI Training Institute in Kochi',
      subtitle: 'Future-Ready Learning with Gen AI',
      description:
        'We offer expert-led programs in Business Analytics, Data Science, Generative AI, and other in-demand software tools tailored to meet current industry needs.',
      backgroundImage:
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      techLogos: [
        'ChatGPT',
        'Claude',
        'Midjourney',
        'TensorFlow',
        'PyTorch',
        'OpenAI',
      ],
      primaryColor: 'from-emerald-600 to-teal-700',
    },
    {
      id: 3,
      title: 'Best Data Science Training Institute in Kochi',
      subtitle: 'Build a Smarter Career and Learning Path with Us',
      description:
        'Our diploma certification programs are affiliated with the STED Council, ensuring credibility and nationwide recognition. Empower your career with future-ready skills and hands-on learning designed to bridge the gap between education and employment.',
      backgroundImage:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      techLogos: [
        'R',
        'Python',
        'Jupyter',
        'Pandas',
        'Scikit-learn',
        'Matplotlib',
      ],
      primaryColor: 'from-orange-600 to-red-700',
    },
    {
      id: 4,
      title: 'Learn Anytime, Anywhere!',
      subtitle: 'Flexible Online Learning Solutions',
      description:
        'Supercharge your career with our pre-recorded Power BI and Tableau courses. Get hands-on learning from experts, practical insights, and the flexibility to learn anytime, anywhere. A 70% boost to your career is just a click away!',
      backgroundImage:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      techLogos: [
        'Power BI',
        'Tableau',
        'Online Learning',
        'Certification',
        '24/7 Access',
        'Expert Support',
      ],
      primaryColor: 'from-indigo-600 to-purple-700',
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentSlide, isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const FloatingTechIcon = ({ name, index, total }) => {
    // Responsive radius calculation
    const getRadius = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 480) return 60; // Extra small mobile
        if (window.innerWidth < 640) return 70; // Small mobile
        if (window.innerWidth < 768) return 85; // Large mobile
        if (window.innerWidth < 1024) return 100; // Tablet
        return 120; // Desktop
      }
      return 100;
    };

    const radius = getRadius();
    const angle = (360 / total) * index;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
      <div
        className="absolute w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl flex items-center justify-center text-white text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-sm xl:text-base font-semibold animate-pulse border border-white/20 hover:scale-110 transition-transform duration-300"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          animationDelay: `${index * 0.2}s`,
        }}
      >
        <span className="text-center leading-tight px-1">{name}</span>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen h-screen xs:h-[750px] sm:h-[750px] md:h-[800px] overflow-hidden bg-gray-900 pt-16 sm:pt-18 md:pt-20">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.primaryColor} opacity-80`}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center py-4 sm:py-6 md:py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:pl-12 xl:pl-16 max-w-7xl w-full">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
            {/* Left Content */}
            <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                <div className="inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full text-[10px] xs:text-xs sm:text-sm font-medium border border-white/20">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 mr-1.5 sm:mr-2" />
                  <span className="truncate">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>
                <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  {slides[currentSlide].title.split(' ').map((word, index) => (
                    <span
                      key={index}
                      className="inline-block animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {word}&nbsp;
                    </span>
                  ))}
                </h1>
                <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-full sm:max-w-xl lg:max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-2.5 sm:gap-3 lg:gap-4">
                <button className="px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group text-xs xs:text-sm sm:text-sm lg:text-base">
                  Start Learning Today
                  <Play className="w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-4 py-2.5 xs:px-5 xs:py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-xs xs:text-sm sm:text-sm lg:text-base">
                  View Courses
                </button>
              </div>
            </div>

            {/* Right Content - Floating Tech Icons */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 mb-4 sm:mb-6 md:mb-8 lg:mb-0">
              <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                {/* Floating Tech Icons */}
                {slides[currentSlide].techLogos.map((tech, index) => (
                  <FloatingTechIcon
                    key={`${currentSlide}-${tech}`}
                    name={tech}
                    index={index}
                    total={slides[currentSlide].techLogos.length}
                  />
                ))}

                {/* Orbital Rings */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 xs:w-40 xs:h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-60 lg:h-60 xl:w-64 xl:h-64 border border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 border border-white/10 rounded-full animate-spin-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on very small screens */}
      <button
        onClick={prevSlide}
        className="hidden xs:flex absolute left-1 sm:left-2 lg:left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-20"
      >
        <ChevronLeft className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden xs:flex absolute right-1 sm:right-2 lg:right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-20"
      >
        <ChevronRight className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Mobile Touch Navigation Area - Only visible on very small screens */}
      <div className="xs:hidden absolute inset-x-0 bottom-20 top-20 z-10 flex">
        <button
          onClick={prevSlide}
          className="flex-1 opacity-0"
          aria-label="Previous slide"
        />
        <button
          onClick={nextSlide}
          className="flex-1 opacity-0"
          aria-label="Next slide"
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 xs:bottom-14 sm:bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

// Custom CSS animations with enhanced responsive support
const style = document.createElement('style');
style.textContent = `
  /* Extra small breakpoint for very small phones */
  @media (max-width: 475px) {
    .xs\\:w-9 { width: 2.25rem; }
    .xs\\:h-9 { height: 2.25rem; }
    .xs\\:w-2 { width: 0.5rem; }
    .xs\\:h-2 { height: 0.5rem; }
    .xs\\:text-xs { font-size: 0.75rem; }
    .xs\\:text-xl { font-size: 1.25rem; }
    .xs\\:text-2xl { font-size: 1.5rem; }
    .xs\\:w-48 { width: 12rem; }
    .xs\\:h-48 { height: 12rem; }
    .xs\\:w-40 { width: 10rem; }
    .xs\\:h-40 { height: 10rem; }
    .xs\\:px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
    .xs\\:py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
    .xs\\:flex-row { flex-direction: row; }
    .xs\\:bottom-14 { bottom: 3.5rem; }
    .xs\\:h-700 { height: 700px; }
    .xs\\:hidden { display: none; }
    .xs\\:flex { display: flex; }
    .xs\\:inline { display: inline; }
    .xs\\:w-4\\.5 { width: 1.125rem; }
    .xs\\:h-4\\.5 { height: 1.125rem; }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes spin-slow {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes spin-reverse {
    from {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.8s ease-out forwards;
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animate-spin-reverse {
    animation: spin-reverse 30s linear infinite;
  }

  /* Improved mobile touch targets */
  @media (max-width: 475px) {
    .animate-fadeInUp {
      animation: fadeInUp 0.6s ease-out forwards;
    }
  }

  /* Prevent horizontal scroll on very small devices */
  @media (max-width: 320px) {
    .container {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
`;
document.head.appendChild(style);

export default Hero;
