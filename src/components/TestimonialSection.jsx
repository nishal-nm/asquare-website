import { useEffect, useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: 'One of the best BI training institute.It was a great experience to get training from Ashik sir. Everything from training to Project is amazing and informative. Provided excellent knowledge in BI with hands on experience. I encourage everyone to take it.. Thank you sir for your guidance and support.',
      name: 'Jayiza CA',
      avatar:
        'https://asquaretechnologiesweb.com/wp-content/uploads/2023/04/52-521023_download-free-icon-female-vectors-blank-facebook-profile-e1628515231590-150x150.webp',
    },
    {
      text: 'Outstanding training program with excellent faculty. The practical approach and real-world projects helped me gain confidence in BI tools. Highly recommended for anyone looking to advance their career.',
      name: 'Rahul M',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format',
    },
    {
      text: "Exceptional learning experience with comprehensive curriculum. The instructor's expertise and dedication made complex concepts easy to understand. Great support throughout the course.",
      name: 'Priya S',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face&auto=format',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Image with multi-layered rotating border */}
          <style>
            {`
          @keyframes ellipseSpin1 {
  0%   { transform: rotate(0deg) translateX(10px) scaleX(1.05) scaleY(0.95); }
  25%  { transform: rotate(90deg) translateX(-5px) scaleX(0.95) scaleY(1.05); }
  50%  { transform: rotate(180deg) translateX(-10px) scaleX(1.05) scaleY(0.95); }
  75%  { transform: rotate(270deg) translateX(5px) scaleX(0.95) scaleY(1.05); }
  100% { transform: rotate(360deg) translateX(10px) scaleX(1.05) scaleY(0.95); }
}

@keyframes ellipseSpin2 {
  0%   { transform: rotate(120deg) translateX(8px) scaleX(1.08) scaleY(0.92); }
  25%  { transform: rotate(30deg) translateX(4px) scaleX(0.92) scaleY(1.08); }
  50%  { transform: rotate(-60deg) translateX(-8px) scaleX(1.08) scaleY(0.92); }
  75%  { transform: rotate(-150deg) translateX(-4px) scaleX(0.92) scaleY(1.08); }
  100% { transform: rotate(-240deg) translateX(8px) scaleX(1.08) scaleY(0.92); }
}

@keyframes ellipseSpin3 {
  0%   { transform: rotate(240deg) translateX(6px) scaleX(1.03) scaleY(0.97); }
  25%  { transform: rotate(150deg) translateX(-3px) scaleX(0.97) scaleY(1.03); }
  50%  { transform: rotate(60deg) translateX(-6px) scaleX(1.03) scaleY(0.97); }
  75%  { transform: rotate(-30deg) translateX(3px) scaleX(0.97) scaleY(1.03); }
  100% { transform: rotate(-120deg) translateX(6px) scaleX(1.03) scaleY(0.97); }
}

          .ellipse-spin-1 { animation: ellipseSpin1 6s ease-in-out infinite; }
          .ellipse-spin-2 { animation: ellipseSpin2 8s ease-in-out infinite; }
          .ellipse-spin-3 { animation: ellipseSpin3 10s ease-in-out infinite; }
        `}
          </style>

          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-[22rem] h-[22rem]">
              {/* Outer hollow ellipse */}
              <div
                className="absolute inset-0 rounded-full ellipse-spin-1"
                style={{
                  background:
                    'conic-gradient(from 0deg, rgba(244,114,182,0.3), rgba(216,180,254,0.3), rgba(244,114,182,0.3))',
                }}
              ></div>

              {/* Middle filled ellipse */}
              <div
                className="absolute inset-0 rounded-full ellipse-spin-2"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(236,72,153,0.35), rgba(192,38,211,0.35))',
                }}
              ></div>

              {/* Inner ellipse */}
              <div
                className="absolute inset-[20px] rounded-full ellipse-spin-3"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(249,168,212,0.2), rgba(167,139,250,0.2))',
                }}
              ></div>

              {/* Image circle */}
              <div className="absolute inset-[8px] bg-white rounded-full shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                  <img
                    src="https://asquaretechnologiesweb.com/wp-content/uploads/elementor/thumbs/pikaso_texttoimage_35mm-film-photography-A-coding-workshop-in-a-brigh-e1723972595730-qss8qnayyv8msor3orisxwrd81447v7z1dloa2e4js.webp"
                    alt="Students in training"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="flex-1 max-w-lg">
            <div className="mb-8">
              <span className="text-slate-700 font-medium text-sm tracking-[0.3em] uppercase">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl font-bold text-pink-500 mb-8 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Hear from Our Students
              </h2>
            </div>

            {/* Testimonial content with fade transition */}
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 transform ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8'
                  }`}
                >
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 relative">
                    <span className="text-6xl text-pink-300 absolute -top-4 -left-2 font-serif">
                      "
                    </span>
                    <span className="relative z-10">{testimonial.text}</span>
                  </blockquote>
                  <div className="font-bold text-gray-800 text-xl">
                    {testimonial.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Navigation dots with actual avatars */}
            <div className="flex space-x-5 mt-12">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`relative w-12 h-12 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 ${
                    index === currentTestimonial
                      ? 'ring-4 ring-pink-500 ring-offset-4 shadow-lg scale-110'
                      : 'ring-2 ring-gray-300 hover:ring-pink-300'
                  }`}
                >
                  {/* Avatar image */}
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
