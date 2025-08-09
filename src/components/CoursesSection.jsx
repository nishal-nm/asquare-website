import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const courses = [
  {
    id: 1,
    title: 'Generative AI',
    category: 'Business Intelligence Tools',
    lessons: 60,
    duration: '35 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2025/07/asquare-technologies-genai-590x430.png',
    tools: 'ChatGPT, Claude, Midjourney, Stable Diffusion',
    type: 'Professional Certificate',
    popular: true,
  },
  {
    id: 2,
    title: 'Certified Qliksense Course',
    category: 'Analytics',
    lessons: 23,
    duration: '8 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquaretechnologies-qliksense-training-kochi-590x430.jpg',
    tools: 'QlikSense, Data Modeling',
    type: 'Certification',
  },
  {
    id: 3,
    title: 'Certificate in Python Programming',
    category: 'Programming',
    lessons: 41,
    duration: '8 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquare-technologies-python-programming-590x430.jpg',
    tools: 'Python, Django, Flask',
    type: 'Certification',
  },
  {
    id: 4,
    title: 'Certificate in Alteryx',
    category: 'Analytics',
    lessons: 18,
    duration: '8 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2025/01/asquaretechnologies-no1-kerala-alteryx-training-center-590x430.jpg',
    tools: 'Alteryx Designer, Workflows',
    type: 'Certification',
  },
  {
    id: 5,
    title: 'Professional Diploma in Data Science',
    category: 'Business Intelligence Tools',
    lessons: 53,
    duration: '26 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2023/08/data-science-new-banner-590x430.webp',
    tools: 'Python, R, Machine Learning',
    type: 'Professional Diploma',
    popular: true,
  },
  {
    id: 6,
    title: 'Certificate in Microsoft Power BI',
    category: 'Microsoft Tools',
    lessons: 68,
    duration: '8 weeks',
    image:
      'https://asquaretechnologiesweb.com/wp-content/uploads/2023/03/power-bi-590x430.webp',
    tools: 'Power BI, DAX, Power Query',
    type: 'Certification',
  },
];

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Analytics',
    'Business Intelligence Tools',
    'Programming',
    'Microsoft Tools',
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            <span className="text-slate-700 font-medium text-sm tracking-[0.3em] uppercase">
              OUR COURSES
            </span>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent via-indigo-300 to-transparent"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Step Into Your Next{' '}
            <span className="font-semibold text-[#F41467]">Chapter</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome to Our Cutting-Edge Programs in Analytics, Data Science &
            Generative AI Empower Your Career with Future-Ready Skills –
            Designed for Fresh Graduates & Working Professionals
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredCourses.map((course, index) => (
            <div key={course.id} className="group cursor-pointer my-3">
              {/* Asymmetric Card Layout */}
              <div className="relative">
                {/* Background Image - Diagonal Cut */}
                <div
                  className="relative h-32 overflow-hidden bg-gray-100"
                  style={{
                    clipPath:
                      index % 2 === 0
                        ? 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)'
                        : 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                  }}
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>

                {/* Floating Content Box */}
                <div
                  className={`absolute top-16 ${
                    index % 2 === 0 ? 'right-4' : 'left-4'
                  } bg-[#F5F5F5] p-4 shadow-lg rounded-lg min-w-48 group-hover:shadow-xl transition-shadow`}
                >
                  <div className="space-y-2">
                    <h3 className="font-medium text-gray-900 text-sm leading-tight">
                      {course.title}
                    </h3>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{course.lessons} lessons</span>
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Subtle Action Indicator */}
                  <div className="mt-3 flex justify-end">
                    <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <ArrowRight size={12} className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-15">
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:border-pink-500 hover:text-[#F41467] transition-colors font-medium">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
