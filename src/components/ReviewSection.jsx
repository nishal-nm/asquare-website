import { Check, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

const reviews = [
  {
    name: 'Tushar Joshi',
    date: 'June 2025',
    profileImage:
      'https://lh3.googleusercontent.com/a/ACg8ocK5dNcq8y-djzHCAy9ANIhsEQix_R3Pwa4U9ArglXiCDxjnFw=w80-h80-c-rp-mo-br100',
    rating: 5,
    review:
      'Outstanding training sessions! The instructors explained every concept clearly, and the hands-on projects boosted my confidence.',
  },
  {
    name: 'Aarav Sharma',
    date: 'July 2025',
    profileImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    review:
      'The Full Stack Development course was a game-changer for my career. Industry-level projects and personal mentorship made all the difference.',
  },
  {
    name: 'Priya Menon',
    date: 'July 2025',
    profileImage:
      'https://img.freepik.com/free-photo/beautiful-charming-girl-wears-pink-hoodie-visor-cap-back_176532-7775.jpg',
    rating: 5,
    review:
      'The training was practical and industry-focused. The supportive faculty ensured I understood every topic thoroughly.',
  },
  {
    name: 'Rahul Kumar',
    date: 'August 2025',
    profileImage:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    review:
      'Completed the Data Science program here — excellent course structure and real-world projects that truly prepared me for job interviews.',
  },
  {
    name: 'Sneha Patel',
    date: 'August 2025',
    profileImage:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    review:
      'A Square Technologies has the best learning environment! The labs, doubt sessions, and placement support are top-notch.',
  },
  {
    name: 'Vikram Singh',
    date: 'August 2025',
    profileImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
    rating: 5,
    review:
      'Professional trainers with deep industry knowledge. The AWS certification course exceeded my expectations.',
  },
];

const ReviewSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + Math.ceil(reviews.length / 3)) %
        Math.ceil(reviews.length / 3)
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  fill="#fbbf24"
                  stroke="#fbbf24"
                  className="mr-0.5"
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-700">4.9/5</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Trusted by Thousands
          </h2>
          <p className="text-gray-600">
            Real reviews from verified Google users
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Reviews Carousel */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
                (_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2">
                      {reviews
                        .slice(slideIndex * 3, (slideIndex + 1) * 3)
                        .map((review, index) => (
                          <div
                            key={slideIndex * 3 + index}
                            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                          >
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={review.profileImage}
                                  alt={review.name}
                                  className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100"
                                />
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {review.name}
                                  </h4>
                                  <p className="text-sm text-gray-500">
                                    {review.date}
                                  </p>
                                </div>
                              </div>
                              <img
                                src="https://cdn.trustindex.io/assets/platform/Google/icon.svg"
                                alt="Google"
                                className="w-5 h-5"
                              />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-3">
                              <div className="flex">
                                {Array.from({ length: review.rating }).map(
                                  (_, i) => (
                                    <Star
                                      key={i}
                                      size={16}
                                      fill="#fbbf24"
                                      stroke="#fbbf24"
                                      className="mr-0.5"
                                    />
                                  )
                                )}
                              </div>
                              <div className="flex items-center">
                                <span className="bg-green-500 text-white rounded-full p-0.5">
                                  <Check size={12} strokeWidth={3} />
                                </span>
                              </div>
                            </div>

                            {/* Review */}
                            <p className="text-gray-700 text-sm leading-relaxed">
                              "{review.review}"
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  currentSlide === index ? 'bg-blue-500 w-6' : 'bg-gray-300'
                }`}
              />
            )
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-8 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  EXCELLENT
                </div>
                <div className="flex items-center justify-center mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="#fbbf24"
                      stroke="#fbbf24"
                      className="mr-0.5"
                    />
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1,200+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-500">Average Rating</div>
              </div>
            </div>
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
              alt="Powered by Google"
              className="h-8 opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
