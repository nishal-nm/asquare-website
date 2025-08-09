// components/Projects/ProjectsSection.jsx
export default function ProjectsSection() {
  const projects = [
    {
      title: 'Driver Logistics Analysis',
      tool: 'Power BI',
      image:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      link: '#',
    },
    {
      title: 'SuperMarket Sales Analytics',
      tool: 'Tableau',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      link: '#',
    },
    {
      title: 'HR Performance Dashboard',
      tool: 'Power BI',
      image:
        'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop',
      link: '#',
    },
    {
      title: 'Financial Trends Report',
      tool: 'Tableau',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      link: '#',
    },
    {
      title: 'E-commerce Analytics',
      tool: 'Power BI',
      image:
        'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=250&fit=crop',
      link: '#',
    },
    {
      title: 'Healthcare Data Visualization',
      tool: 'Tableau',
      image:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=250&fit=crop',
      link: '#',
    },
  ];

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
            <span className="text-white-700 font-medium text-sm tracking-[0.3em] uppercase">
              DASHBOARDS
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-indigo-400 to-transparent"></div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Analytics Reports by Learners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.tool}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  className="inline-block mt-4 text-pink-600 hover:text-purple-400 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
