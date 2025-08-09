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

  // Get 5 visible partners with the active one in center
  const getVisiblePartners = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + partners.length) % partners.length;
      visible.push({ ...partners[index], position: i });
    }
    return visible;
  };

  return (
    <section className="bg-gradient-to-r from-slate-50 via-white to-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-slate-800 mb-2">
            Placement{' '}
            <span className="font-semibold bg-gradient-to-r from-purple-600 to-[#F41467] bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="text-slate-600 text-sm">
            Trusted by industry leaders worldwide
          </p>
        </div>

        {/* Horizontal Sliding Carousel */}
        <div
          className="relative flex items-center justify-center h-24"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Partners Track */}
          <div className="flex items-center justify-center gap-8 w-full max-w-4xl">
            {getVisiblePartners().map((partner, index) => {
              const isCenter = partner.position === 0;
              const isAdjacent = Math.abs(partner.position) === 1;
              const isEdge = Math.abs(partner.position) === 2;

              let scale = isCenter ? 1 : isAdjacent ? 0.8 : 0.6;
              let opacity = isCenter ? 1 : isAdjacent ? 0.7 : 0.4;

              return (
                <div
                  key={`${partner.name}-${partner.position}`}
                  className="transition-all duration-500 ease-out cursor-pointer hover:scale-110"
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
                    className={`w-32 h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center hover:shadow-md transition-all duration-300 ${
                      isCenter ? 'ring-2 ring-blue-200 shadow-lg' : ''
                    }`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 w-8 h-8 bg-white/80 backdrop-blur border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-white group"
          >
            <ChevronLeft
              size={16}
              className="text-slate-600 group-hover:text-slate-800"
            />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 w-8 h-8 bg-white/80 backdrop-blur border border-slate-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center hover:bg-white group"
          >
            <ChevronRight
              size={16}
              className="text-slate-600 group-hover:text-slate-800"
            />
          </button>
        </div>

        {/* Minimal Progress Dots */}
        <div className="flex justify-center gap-1.5 mt-8">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? 'w-6 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacementPartners;
