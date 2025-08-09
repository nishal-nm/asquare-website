import {
  Building2,
  ChevronLeft,
  ChevronRight,
  MapPin,
  TrendingUp,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const placements = [
  {
    name: 'Rijin',
    role: 'Software Developer',
    company: 'UST Global',
    location: 'Kochin',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/4F46E5/white?text=UST',
    package: '8.5 LPA',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    name: 'Mebin Mathew',
    role: 'Business Analyst',
    company: 'DXC Technology',
    location: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/059669/white?text=DXC',
    package: '7.2 LPA',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Sudha',
    role: 'UI/UX Designer',
    company: 'Pentasoft Technology',
    location: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/DC2626/white?text=PTS',
    package: '6.8 LPA',
    color: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Kuldeep',
    role: 'System Engineer',
    company: 'Infosys',
    location: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/0EA5E9/white?text=IFS',
    package: '5.5 LPA',
    color: 'from-sky-400 to-blue-500',
  },
  {
    name: 'Nikhil P Jose',
    role: 'Power BI Developer',
    company: 'Polester Solutions',
    location: 'Noida',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/7C3AED/white?text=PS',
    package: '9.2 LPA',
    color: 'from-purple-400 to-violet-500',
  },
  {
    name: 'Rohit Menon',
    role: 'Marketing Analyst',
    company: 'Meredith',
    location: 'Bengaluru',
    image:
      'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/EA580C/white?text=MRD',
    package: '11.5 LPA',
    color: 'from-orange-400 to-amber-500',
  },
  {
    name: 'Priya Sharma',
    role: 'Data Scientist',
    company: 'Microsoft',
    location: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/0078D4/white?text=MS',
    package: '15.2 LPA',
    color: 'from-indigo-400 to-blue-600',
  },
  {
    name: 'Arjun Kumar',
    role: 'Full Stack Developer',
    company: 'Amazon',
    location: 'Bengaluru',
    image:
      'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/FF9900/white?text=AMZ',
    package: '18.5 LPA',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'Sneha Patel',
    role: 'DevOps Engineer',
    company: 'Google',
    location: 'Pune',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/4285F4/white?text=G',
    package: '22.0 LPA',
    color: 'from-green-400 to-emerald-500',
  },
  {
    name: 'Vikram Singh',
    role: 'Cloud Architect',
    company: 'IBM',
    location: 'Delhi',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/1261FE/white?text=IBM',
    package: '16.8 LPA',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'Aisha Khan',
    role: 'Product Manager',
    company: 'Flipkart',
    location: 'Bangalore',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/047BD6/white?text=FK',
    package: '14.5 LPA',
    color: 'from-cyan-400 to-teal-500',
  },
  {
    name: 'Rahul Nair',
    role: 'Mobile App Developer',
    company: 'PayTM',
    location: 'Mumbai',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/00BAF2/white?text=PT',
    package: '10.2 LPA',
    color: 'from-teal-400 to-cyan-600',
  },
  {
    name: 'Kavya Reddy',
    role: 'Machine Learning Engineer',
    company: 'Nvidia',
    location: 'Hyderabad',
    image:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/76B900/white?text=NV',
    package: '19.8 LPA',
    color: 'from-lime-400 to-green-500',
  },
  {
    name: 'Amit Gupta',
    role: 'Security Analyst',
    company: 'Cisco',
    location: 'Chennai',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face',
    companyLogo: 'https://via.placeholder.com/40x40/1BA0D7/white?text=CS',
    package: '12.3 LPA',
    color: 'from-sky-400 to-cyan-500',
  },
];

const PlacementSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [rotation, setRotation] = useState(0);

  // Continuous rotation animation
  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 50);

    return () => clearInterval(rotationInterval);
  }, []);

  // Auto-rotation with smooth transitions
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % placements.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleCardClick = (targetIndex) => {
    setCurrentIndex(targetIndex);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextPlacement = () => {
    setCurrentIndex((prev) => (prev + 1) % placements.length);
  };

  const prevPlacement = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + placements.length) % placements.length
    );
  };

  // Calculate positions for orbital layout with depth layers
  const getCardPosition = (index, currentIndex) => {
    const totalCards = placements.length;
    const adjustedIndex = (index - currentIndex + totalCards) % totalCards;

    // Define visible positions (only show 6 cards at a time)
    const visiblePositions = 6;
    const isVisible = adjustedIndex < visiblePositions;

    if (!isVisible) {
      // Hidden cards - positioned randomly behind with very low opacity
      const hideAngle = (adjustedIndex * 43) % 360; // Scattered positions
      const hideRadius = 250 + ((adjustedIndex * 20) % 100); // Varying depths
      return {
        x: Math.cos((hideAngle * Math.PI) / 180) * hideRadius,
        y: Math.sin((hideAngle * Math.PI) / 180) * hideRadius,
        scale: 0.3,
        zIndex: 1,
        opacity: 0,
        rotation: hideAngle,
        isVisible: false,
      };
    }

    // Visible cards arrangement
    let angle, radius, scale, zIndex, opacity;

    if (adjustedIndex === 0) {
      // Center card
      angle = 0;
      radius = 0;
      scale = 1.2;
      zIndex = 50;
      opacity = 1;
    } else if (adjustedIndex === 1) {
      // Front right
      angle = 45;
      radius = 160;
      scale = 0.9;
      zIndex = 40;
      opacity = 0.95;
    } else if (adjustedIndex === 2) {
      // Back right
      angle = 90;
      radius = 200;
      scale = 0.7;
      zIndex = 30;
      opacity = 0.8;
    } else if (adjustedIndex === 3) {
      // Back left
      angle = 270;
      radius = 200;
      scale = 0.7;
      zIndex = 30;
      opacity = 0.8;
    } else if (adjustedIndex === 4) {
      // Front left
      angle = 315;
      radius = 160;
      scale = 0.9;
      zIndex = 40;
      opacity = 0.95;
    } else {
      // Transitioning card (fading in from back)
      angle = 180;
      radius = 280;
      scale = 0.5;
      zIndex = 10;
      opacity = 0.4;
    }

    const x = Math.cos((angle * Math.PI) / 180) * radius;
    const y = Math.sin((angle * Math.PI) / 180) * radius;

    return {
      x,
      y,
      scale,
      zIndex,
      opacity,
      rotation: angle,
      isVisible: true,
    };
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 py-16 overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-30 ${
              i % 3 === 0
                ? 'bg-blue-300'
                : i % 3 === 1
                ? 'bg-purple-300'
                : 'bg-pink-300'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${8 + i * 11}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(180deg);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        .card-transition {
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            <span className="text-slate-700 font-medium text-sm tracking-[0.3em] uppercase">
              PLACEMENTS
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-indigo-300 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-slate-800 mb-6 tracking-tight">
            From Trainee
            <span className="block font-bold bg-gradient-to-r from-blue-600 via-[#F41467] to-pink-800 bg-clip-text text-transparent">
              to Trailblazer
            </span>
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Celebrating our successful journey from learning to earning
          </p>
        </div>

        {/* Orbital Placement Display with Depth Layers */}
        <div
          className="relative flex items-center justify-center min-h-[650px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Central Orbital System */}
          <div className="relative w-[700px] h-[700px] mx-auto">
            {/* Animated Orbital Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Multiple depth rings */}
              {[1, 2, 3, 4].map((ring) => (
                <div
                  key={ring}
                  className={`absolute rounded-full border opacity-20`}
                  style={{
                    width: `${320 + ring * 60}px`,
                    height: `${320 + ring * 60}px`,
                    borderColor: ring % 2 === 0 ? '#6366f1' : '#8b5cf6',
                    transform: `rotate(${
                      rotation * (ring % 2 === 0 ? 1 : -0.7)
                    }deg)`,
                    borderWidth: ring === 1 ? '2px' : '1px',
                  }}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${
                      ring % 4 === 0
                        ? 'from-blue-400 to-purple-500'
                        : ring % 4 === 1
                        ? 'from-purple-400 to-pink-500'
                        : ring % 4 === 2
                        ? 'from-pink-400 to-rose-500'
                        : 'from-rose-400 to-orange-500'
                    } shadow-lg`}
                    style={{
                      top: `${ring * 7}%`,
                      right: `${ring * 5}%`,
                      transform: 'translate(50%, -50%)',
                    }}
                  />
                </div>
              ))}

              {/* Center focus rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="absolute w-32 h-32 rounded-full border-2 border-blue-300/30"
                  style={{ animation: 'pulse-ring 4s ease-out infinite' }}
                />
                <div
                  className="absolute w-40 h-40 rounded-full border-2 border-purple-300/20"
                  style={{ animation: 'pulse-ring 4s ease-out infinite 2s' }}
                />
              </div>
            </div>

            {/* Placement Cards with Depth Layers */}
            {placements.map((placement, index) => {
              const position = getCardPosition(index, currentIndex);

              return (
                <div
                  key={placement.name}
                  className={`absolute card-transition cursor-pointer ${
                    position.isVisible
                      ? 'pointer-events-auto'
                      : 'pointer-events-none'
                  }`}
                  style={{
                    transform: `translate(${position.x}px, ${
                      position.y
                    }px) scale(${position.scale}) rotate(${
                      position.rotation * 0.02
                    }deg)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-130px',
                    marginTop: '-160px',
                    zIndex: position.zIndex,
                    opacity: position.opacity,
                    filter: position.scale < 0.8 ? 'blur(0.5px)' : 'none',
                  }}
                  onClick={() => position.isVisible && handleCardClick(index)}
                >
                  {/* Card Container */}
                  <div className="relative w-[260px] h-[320px] group">
                    {/* Custom SVG Card Shape */}
                    <svg
                      className="absolute inset-0 w-full h-full drop-shadow-xl"
                      viewBox="0 0 260 270"
                      style={{
                        filter: `drop-shadow(0 ${
                          position.scale > 1
                            ? '25'
                            : position.scale > 0.8
                            ? '15'
                            : '8'
                        }px ${
                          position.scale > 1
                            ? '35'
                            : position.scale > 0.8
                            ? '25'
                            : '15'
                        }px rgba(0,0,0,${
                          position.scale > 1
                            ? '0.15'
                            : position.scale > 0.8
                            ? '0.1'
                            : '0.05'
                        }))`,
                      }}
                    >
                      <defs>
                        <linearGradient
                          id={`cardGrad-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="white" />
                          <stop offset="100%" stopColor="#fefefe" />
                        </linearGradient>
                        <linearGradient
                          id={`borderGrad-${index}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor={
                              placement.color.includes('blue')
                                ? '#3b82f6'
                                : placement.color.includes('emerald')
                                ? '#10b981'
                                : placement.color.includes('pink')
                                ? '#ec4899'
                                : placement.color.includes('purple')
                                ? '#8b5cf6'
                                : placement.color.includes('orange')
                                ? '#f97316'
                                : placement.color.includes('green')
                                ? '#22c55e'
                                : placement.color.includes('yellow')
                                ? '#eab308'
                                : placement.color.includes('lime')
                                ? '#84cc16'
                                : placement.color.includes('sky')
                                ? '#0ea5e9'
                                : placement.color.includes('teal')
                                ? '#14b8a6'
                                : '#3b82f6'
                            }
                            stopOpacity={position.opacity * 0.4}
                          />
                          <stop
                            offset="100%"
                            stopColor={
                              placement.color.includes('cyan')
                                ? '#06b6d4'
                                : placement.color.includes('teal')
                                ? '#14b8a6'
                                : placement.color.includes('rose')
                                ? '#f43f5e'
                                : placement.color.includes('violet')
                                ? '#a855f7'
                                : placement.color.includes('amber')
                                ? '#f59e0b'
                                : placement.color.includes('emerald')
                                ? '#059669'
                                : placement.color.includes('orange')
                                ? '#ea580c'
                                : placement.color.includes('green')
                                ? '#16a34a'
                                : placement.color.includes('blue')
                                ? '#2563eb'
                                : placement.color.includes('indigo')
                                ? '#4f46e5'
                                : '#06b6d4'
                            }
                            stopOpacity={position.opacity * 0.6}
                          />
                        </linearGradient>
                      </defs>

                      {/* Smooth curved card shape */}
                      <path
                        d="M30,50 Q30,30 50,30 L210,30 Q230,30 230,50 L230,250 Q230,270 220,280 L210,290 Q200,295 190,290 L70,290 Q50,295 40,285 L30,275 Q30,265 30,250 Z"
                        fill={`url(#cardGrad-${index})`}
                        stroke={`url(#borderGrad-${index})`}
                        strokeWidth={
                          position.scale > 1
                            ? '3'
                            : position.scale > 0.8
                            ? '2'
                            : '1.5'
                        }
                        className={
                          position.scale > 1 ? 'group-hover:stroke-[3.5]' : ''
                        }
                      />
                    </svg>

                    {/* Card Content - Perfectly Aligned */}
                    <div className="absolute inset-0 flex flex-col">
                      {/* Header Section */}
                      <div className="px-10 pt-18 pb-3">
                        <div className="flex items-start gap-3">
                          {/* Profile Image Container */}
                          <div className="relative flex-shrink-0">
                            <div
                              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${placement.color} p-0.5 shadow-lg`}
                            >
                              <div className="w-full h-full rounded-lg overflow-hidden bg-white">
                                <img
                                  src={placement.image}
                                  alt={placement.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            {/* Company Logo Badge */}
                            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-white rounded-lg shadow-md border border-gray-200 flex items-center justify-center">
                              <img
                                src={placement.companyLogo}
                                alt={placement.company}
                                className="w-3.5 h-3.5 rounded-sm"
                              />
                            </div>
                          </div>

                          {/* Name and Role Section */}
                          <div className="flex-1 min-w-0 pt-0.5">
                            <h3 className="font-bold text-slate-900 text-base mb-1 leading-tight">
                              <span className="block truncate">
                                {placement.name}
                              </span>
                            </h3>
                            <p className="text-slate-600 text-xs leading-tight mb-2 h-8 overflow-hidden">
                              <span className="line-clamp-2">
                                {placement.role}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Package Badge Section */}
                      <div className="px-10 pb-3">
                        <div
                          className={`inline-flex items-center gap-1.5 bg-gradient-to-r ${placement.color} text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm`}
                        >
                          <TrendingUp size={10} />
                          <span className="text-xs">{placement.package}</span>
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1"></div>

                      {/* Company Details Section */}
                      <div className="px-11 pb-6">
                        <div className="space-y-2.5">
                          <div className="flex items-center gap-2.5">
                            <Building2
                              size={14}
                              className="text-slate-400 flex-shrink-0"
                            />
                            <span className="text-slate-700 font-medium text-xs leading-tight">
                              <span className="block truncate">
                                {placement.company}
                              </span>
                            </span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <MapPin
                              size={14}
                              className="text-slate-400 flex-shrink-0"
                            />
                            <span className="text-slate-600 text-xs leading-tight">
                              {placement.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Controls */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-40">
              <button
                onClick={prevPlacement}
                className="pointer-events-auto -translate-x-32 w-12 h-12 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:bg-white group"
              >
                <ChevronLeft
                  size={20}
                  className="text-slate-600 group-hover:text-slate-800 transition-colors"
                />
              </button>
              <button
                onClick={nextPlacement}
                className="pointer-events-auto translate-x-32 w-12 h-12 bg-white/90 backdrop-blur border border-slate-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:bg-white group"
              >
                <ChevronRight
                  size={20}
                  className="text-slate-600 group-hover:text-slate-800 transition-colors"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementSection;
