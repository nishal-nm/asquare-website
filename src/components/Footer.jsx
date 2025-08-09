import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const courses = [
    {
      name: 'Professional Diploma in Data Analytics',
      href: '/courses/data-analytics',
    },
    {
      name: 'Professional Diploma in Business Analytics',
      href: '/courses/business-analytics',
    },
    { name: 'Certificate in Microsoft Power BI', href: '/courses/power-bi' },
    {
      name: 'Certificate in Tableau Data Visualization',
      href: '/courses/tableau',
    },
    { name: 'Oracle Business Intelligence(OBIEE)', href: '/courses/obiee' },
    { name: 'Oracle SQL Basic and Advanced', href: '/courses/oracle-sql' },
    { name: 'Oracle PLSQL Basic and Advanced', href: '/courses/oracle-plsql' },
    { name: 'Oracle Data Integrator(ODI)', href: '/courses/odi' },
    {
      name: 'Certificate in Artificial Intelligence',
      href: '/courses/ai-fundamentals',
    },
    {
      name: 'Professional Diploma in Data Science',
      href: '/courses/data-science',
    },
  ];

  const usefulLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Placements', href: '/placements' },
    { name: 'Courses', href: '/all-courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const socialLinks = [
    {
      icon: Youtube,
      href: 'https://www.youtube.com/@asquaretechnologies7541',
      color: 'hover:text-red-500',
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/asquaretechnologies.in/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/asquare-technologies-37521221b/',
      color: 'hover:text-blue-700',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/asquaretechnologies_/',
      color: 'hover:text-pink-500',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 opacity-10">
        <div className="w-full h-full rounded-full border-4 border-pink-500 animate-pulse"></div>
      </div>
      <div className="absolute top-20 right-16 w-32 h-32 opacity-10">
        <div
          className="w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-bounce"
          style={{ animationDuration: '3s' }}
        ></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 opacity-10">
        <div
          className="w-full h-full rotate-45 bg-gradient-to-r from-orange-500 to-pink-500 animate-spin"
          style={{ animationDuration: '8s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://asquaretechnologiesweb.com/wp-content/uploads/2023/02/asquare-footer-logo-1024x1024.png"
                alt="Asquare Technologies Logo"
                className="w-50 h-50 mb-4"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              A Global Leader in Analytics Training
              <br />
              Empowering thousands of professionals and graduates worldwide with
              industry-focused, expert-led analytics programs.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>

            {/* ISO Certification */}
            <div className="mb-6">
              <img
                src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/iso.webp"
                alt="ISO Certification"
                className="h-16 opacity-80"
              />
            </div>

            {/* Branches */}
            <div>
              <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Branches
              </h3>
              <div className="flex items-center text-gray-300 font-semibold">
                <span>Cochin</span>
                <MapPin size={16} className="mx-2 text-pink-500" />
                <span>Coimbatore</span>
              </div>
            </div>
          </div>

          {/* Courses Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              COURSES
            </h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm leading-relaxed hover:pl-2 transition-all"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-pink-400 transition-colors duration-300 text-sm hover:pl-2 transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Contact Info
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin size={16} />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Asquare Technologies, Achoth Tower, 1st Floor, Infopark Rd,
                  near kuzhikattumoola masjid, Kusumagiri, p.o, Kakkanad, Kerala
                  682030
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div className="text-gray-300 text-sm">
                  <a
                    href="tel:+918714194150"
                    className="hover:text-pink-400 transition-colors block"
                  >
                    +91 8714194150
                  </a>
                  <a
                    href="tel:+919787371365"
                    className="hover:text-pink-400 transition-colors block"
                  >
                    +91 9787371365
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail size={16} />
                </div>
                <div className="text-gray-300 text-sm">
                  <a
                    href="mailto:ashik@asquaretechnologiesweb.com"
                    className="hover:text-pink-400 transition-colors block break-all"
                  >
                    ashik@asquaretechnologiesweb.com
                  </a>
                  <a
                    href="mailto:info@asquaretechnologiesweb.com"
                    className="hover:text-pink-400 transition-colors block break-all"
                  >
                    info@asquaretechnologiesweb.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Asquare Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500"></div>
    </footer>
  );
};

export default Footer;
