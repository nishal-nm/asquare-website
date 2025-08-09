import {
  Award,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Play,
  TrendingUp,
  Users,
} from 'lucide-react';
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
    const angle = (360 / total) * index;
    const radius =
      window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 100 : 120;
    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return (
      <div
        className="absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xs lg:text-sm font-semibold animate-pulse border border-white/20 hover:scale-110 transition-transform duration-300"
        style={{
          transform: `translate(${x}px, ${y}px)`,
          animationDelay: `${index * 0.2}s`,
        }}
      >
        <span className="text-center leading-tight">{name}</span>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen h-[800px] overflow-hidden bg-gray-900 pt-20">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${slide.primaryColor} opacity-80`}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center py-8">
        <div className="container mx-auto pl-8 sm:pl-12 lg:pl-16 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px]">
            {/* Left Content */}
            <div className="text-white space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 lg:space-y-4">
                <div className="inline-flex items-center px-3 py-1.5 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs lg:text-sm font-medium border border-white/20">
                  <Award className="w-3 h-3 lg:w-4 lg:h-4 mr-2" />
                  {slides[currentSlide].subtitle}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
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
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl lg:max-w-2xl">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 lg:gap-6">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-yellow-400">
                    1000+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 flex items-center justify-center mt-1">
                    <Users className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    <span className="hidden sm:inline">Students Trained</span>
                    <span className="sm:hidden">Students</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-green-400">
                    95%
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 flex items-center justify-center mt-1">
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    <span className="hidden sm:inline">Placement Rate</span>
                    <span className="sm:hidden">Placement</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-400">
                    50+
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 flex items-center justify-center mt-1">
                    <BookOpen className="w-3 h-3 lg:w-4 lg:h-4 mr-1" />
                    <span className="hidden sm:inline">Course Modules</span>
                    <span className="sm:hidden">Courses</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center group text-sm lg:text-base">
                  Start Learning Today
                  <Play className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-6 py-3 lg:px-8 lg:py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 text-sm lg:text-base">
                  View Courses
                </button>
              </div>
            </div>

            {/* Right Content - Floating Tech Icons */}
            <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 border border-white/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border border-white/10 rounded-full animate-spin-reverse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 lg:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-20"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 lg:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-20"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
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

// Custom CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
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
`;
document.head.appendChild(style);

export default Hero;
