import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const BlogNewsSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const featuredPost = {
    id: 1,
    title: 'NBA Games Analysis',
    category: 'Blogs',
    date: '06 Aug, 2025',
    comments: 0,
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2025/08/NBA-Analysis-590x430.jpg',
    href: '/nba-games-analysis',
    excerpt:
      'Deep dive into NBA game statistics and player performance analysis using advanced data visualization techniques.',
  };

  const regularPosts = [
    {
      id: 2,
      title: 'IMDb Movie Analysis 1920 – 2020',
      category: 'Blogs',
      date: '31 Jul, 2025',
      comments: 0,
      image:
        'https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/Movie-Analysis-2025-590x430.jpg',
      href: '/imdb-movie-analysis',
    },
    {
      id: 3,
      title: 'Air Quality & Health Impact Dashboard',
      category: 'Blogs',
      date: '10 Jul, 2025',
      comments: 0,
      image:
        'https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/Airpollution-and-Disease-analysis-590x430.png',
      href: '/air-quality-dashboard',
    },
    {
      id: 4,
      title: 'Crop Production Analysis India(1997-2020)',
      category: 'Power BI',
      date: '20 Jun, 2025',
      comments: 0,
      image:
        'https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/crop-production-June-2025-590x430.jpg',
      href: '/crop-production-analysis',
    },
    {
      id: 5,
      title: 'Asquare Technologies Signs MOU with Bharata Mata College',
      category: 'Blogs',
      date: '19 Jun, 2025',
      comments: 0,
      image:
        'https://asquaretechnologiesweb.com/wp-content/uploads/2025/06/WhatsApp-Image-2025-06-25-at-9.59.12-AM-e1750825845686-590x430.jpeg',
      href: '/bharata-mata-college-mou',
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Power BI': 'bg-gradient-to-r from-orange-500 to-red-500',
      Blogs: 'bg-gradient-to-r from-indigo-500 to-purple-500',
    };
    return colors[category] || 'bg-gradient-to-r from-gray-500 to-gray-600';
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-20 animate-bounce"
        style={{ animationDuration: '3s' }}
      ></div>
      <div
        className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-pink-500 mb-4 bg-pink-600 bg-clip-text text-transparent">
            Lates Blog & News
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Stay updated with our latest insights, analysis, and company
            developments
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <div
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredCard('featured')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-semibold ${getCategoryColor(
                    featuredPost.category
                  )}`}
                >
                  {featuredPost.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-3 group-hover:text-[#F41467] transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1 text-purple-500" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle
                        size={16}
                        className="mr-1 text-purple-500"
                      />
                      {featuredPost.comments} Comments
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="bg-gradient-to-r from-pink-500 to-[#F41467] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex items-center group">
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {regularPosts.map((post, index) => (
              <div
                key={post.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden transform hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Category Badge */}
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-white text-xs font-semibold ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {post.category}
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="text-sm lg:text-base font-bold text-gray-800 mb-2 group-hover:text-[#F41467] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1 text-purple-500" />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle
                          size={12}
                          className="mr-1 text-purple-500"
                        />
                        {post.comments}
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div
                      className={`mt-3 h-1 bg-gradient-to-r from-pink-500 to-[#F41467] rounded-full transition-all duration-300 ${
                        hoveredCard === post.id ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-[#F41467] to-pink-500 opacity-50"></div>
    </section>
  );
};

export default BlogNewsSection;
