import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const partners = [
  {
    name: 'Geojit',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-05.webp',
  },
  {
    name: 'Euclidz',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/Screenshot-2025-06-02-160044-768x285.png',
  },
  {
    name: 'Pearl Soft',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-01.webp',
  },
  {
    name: 'TCS',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-04.webp',
  },
  {
    name: 'EY',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-06.webp',
  },
  {
    name: 'UST Global',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-02.webp',
  },
  {
    name: 'Mari App',
    logo: 'https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/Untitled-1-03.webp',
  },
];

const PlacementPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCount, setVisibleCount] = useState(5);

  // Responsive visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile: show 1
      } else if (width < 768) {
        setVisibleCount(3); // Small tablet: show 3
      } else if (width < 1024) {
        setVisibleCount(3); // Tablet: show 3
      } else {
        setVisibleCount(5); // Desktop: show 5
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  // Get visible partners based on screen size
  const getVisiblePartners = () => {
    const visible = [];
    const sideCount = Math.floor((visibleCount - 1) / 2);
    
    for (let i = -sideCount; i <= sideCount; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      visible.push({ ...partners[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Responsive Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-light text-slate-800 mb-2">
            Placement{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-[#F41467] bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-slate-600 text-sm">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Responsive Carousel Container */}
        <div
          className="relative flex items-center justify-center min-h-[80px] sm:min-h-[96px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Partners Track */}
          <div className="flex items-center justify-center w-full px-8 sm:px-12">
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full">
              {getVisiblePartners().map((partner, index) => {
                const isCenter = partner.position === 0;
                const isAdjacent = Math.abs(partner.position) === 1;
                const isEdge = Math.abs(partner.position) === 2;

                // Responsive scaling and sizing
                let scale, opacity, cardClasses;
                
                if (visibleCount === 1) {
                  // Mobile: only center item
                  scale = 1;
                  opacity = 1;
                  cardClasses = "w-40 h-20 sm:w-48 sm:h-24";
                } else if (visibleCount === 3) {
                  // Tablet: 3 items
                  scale = isCenter ? 1 : 0.8;
                  opacity = isCenter ? 1 : 0.6;
                  cardClasses = "w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18";
                } else {
                  // Desktop: 5 items
                  scale = isCenter ? 1 : isAdjacent ? 0.85 : 0.7;
                  opacity = isCenter ? 1 : isAdjacent ? 0.7 : 0.4;
                  cardClasses = "w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16";
                }

                return (
                  <div
                    key={`${partner.name}-${partner.position}`}
                    className="transition-all duration-500 ease-out cursor-pointer hover:scale-110 flex-shrink-0"
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                    }}
                    onClick={() => {
                      if (partner.position < 0) {
                        for (let i = 0; i < Math.abs(partner.position); i++)
                          prevSlide();
                      } else if (partner.position > 0) {
                        for (let i = 0; i < partner.position; i++) nextSlide();
                      }
                    }}
                  >
                    <div
                      className={`${cardClasses} bg-white rounded-lg sm:rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md transition-all duration-300 p-2 sm:p-3 ${
                        isCenter ? 'ring-1 ring-blue-200 shadow-lg' : ''
                      }`}
                    >
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Responsive Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur border border-slate-200 rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-white group z-10"
          >
            <ChevronLeft
              size={14}
              className="text-slate-600 group-hover:text-slate-800 sm:w-4 sm:h-4"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white/80 backdrop-blur border border-slate-200 rounded-md sm:rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-white group z-10"
          >
            <ChevronRight
              size={14}
              className="text-slate-600 group-hover:text-slate-800 sm:w-4 sm:h-4"
            />
          </button>
        </div>

        {/* Responsive Progress Dots */}
        <div className="flex justify-center gap-1 sm:gap-1.5 mt-6 sm:mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'w-4 sm:w-6 h-1 sm:h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'
                  : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-slate-300 hover:bg-slate-400 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Mobile-only: Current partner name */}
        <div className="block sm:hidden text-center mt-4">
          <p className="text-sm text-slate-600 font-medium">
            {partners[currentIndex].name}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;