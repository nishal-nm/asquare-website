import { CheckCircle, ExternalLink, Rocket } from 'lucide-react';

const features = [
  'ISO 9001:2015 Certified | Approved by STED Council',
  'Expert-Led Training by Industry Professionals',
  'Live & Interactive Learning Experience',
  'Soft Skills Mentorship for Career Growth',
  '100% Placement Support & Guidance',
  'Hands-on Projects with Expert Reviews',
  'Mock Interviews with Real Industry Feedback',
  'Global Internship Opportunity with a Gulf-based Firm',
];

const WhyUs = () => {
  return (
    <section className="relative bg-gradient-to-r from-white via-slate-50 to-indigo-50/20 py-16">
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-20 h-20 border border-blue-200 rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-100 rounded-lg rotate-45"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            {/* Header */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-800 mb-4 leading-tight">
                100% Career Guidance to{' '}
                <span className="font-semibold bg-gradient-to-r from-purple-500 to-[#F41467] bg-clip-text text-transparent">
                  Students
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                <span className="font-medium text-slate-700">
                  Empowering Career Success
                </span>
                <br />
                We provide end-to-end career guidance—equipping students with
                the right skills, clarity, and confidence to make informed
                decisions and thrive in their professional journey.
              </p>

              <h3 className="text-xl font-medium text-slate-800 mb-2">
                Why Choose Asquare Technologies?
              </h3>
            </div>

            {/* Features List - Compact Grid */}
            <div className="grid grid-cols-1 mb-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 group hover:bg-white/50 hover:shadow-sm rounded-lg p-2 transition-all duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle
                      size={16}
                      className="text-emerald-500 fill-emerald-100"
                    />
                  </div>
                  <span className="text-slate-700 text-sm leading-relaxed group-hover:text-slate-800 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700">
                <Rocket size={18} className="text-blue-500" />
                <span className="font-medium">
                  Choose Excellence. Choose Asquare Technologies. Build a
                  Future-Ready Career Today.
                </span>
              </div>

              <a
                href="https://asquaretechnologiesweb.com/our-courses/"
                className="inline-flex items-center gap-2 bg-[#F41467] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <span>View Details</span>
                <ExternalLink
                  size={16}
                  className="group-hover:rotate-12 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-10"></div>

              <img
                src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/pikaso_texttoimage_35mm-film-photography-A-female-teacher-of-Black-de.webp"
                alt="Professional teacher providing career guidance"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl opacity-20 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
