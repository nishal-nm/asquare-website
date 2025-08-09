const Header = ({ sectionSelect, setMenu, isMenu }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="./images/Asquare_logo_1.png"
              alt="Asquare Logo"
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('home');
              }}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              Home
            </a>

            {/* Dashboard Dropdown */}
            <div className="relative group">
              <button
                onClick={() => sectionSelect('dashboard')}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                <span>Dashboard</span>
                <svg
                  className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Microsoft Power BI
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Tableau Visuals
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Tableau Twins
                </a>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('placements');
              }}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              Placements
            </a>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                onClick={() => sectionSelect('courses')}
                className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                <span>Courses</span>
                <svg
                  className="w-4 h-4 transform group-hover:rotate-180 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 max-h-80 overflow-y-auto">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Generative AI
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Business Analytics
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Data Analytics
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Data Science
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Power BI
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Tableau Data Visualization
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  SalesForce Admin with AI
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Python Programming
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  Artificial Intelligence
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-150"
                >
                  QlikSense
                </a>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('about');
              }}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              About Us
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('blog');
              }}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              Blog
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('contact');
              }}
              className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              Contact Us
            </a>

            {/* Desktop Login Button */}
            <div className="hidden lg:flex items-center space-x-4 ml-6 pl-6 border-l border-gray-200">
              <button
                onClick={() => sectionSelect('login')}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Login</span>
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenu(!isMenu)}
            className="lg:hidden relative p-2 rounded-md hover:bg-gray-50 transition-colors duration-200 touch-manipulation"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                  isMenu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm my-0.5 ${
                  isMenu ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-5 rounded-sm ${
                  isMenu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenu ? 'max-h-screen opacity-100 pb-4' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="pt-2 space-y-1 border-t border-gray-100">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('home');
                setMenu(false);
              }}
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200 font-medium text-sm touch-manipulation"
            >
              Home
            </a>

            {/* Mobile Dashboard Section */}
            <div className="px-4 py-2">
              <button
                onClick={() => sectionSelect('dashboard')}
                className="w-full text-left text-gray-700 font-medium text-sm mb-2 touch-manipulation"
              >
                Dashboard
              </button>
              <div className="pl-4 space-y-1.5">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Microsoft Power BI
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Tableau Visuals
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Tableau Twins
                </a>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('placements');
                setMenu(false);
              }}
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200 font-medium text-sm touch-manipulation"
            >
              Placements
            </a>

            {/* Mobile Courses Section */}
            <div className="px-4 py-2">
              <button
                onClick={() => sectionSelect('courses')}
                className="w-full text-left text-gray-700 font-medium text-sm mb-2 touch-manipulation"
              >
                Courses
              </button>
              <div className="pl-4 space-y-1.5 max-h-40 overflow-y-auto">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Generative AI
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Business Analytics
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Data Analytics
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Data Science
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Power BI
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Tableau Data Visualization
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  SalesForce Admin with AI
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Python Programming
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  Artificial Intelligence
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenu(false);
                  }}
                  className="block text-sm text-gray-600 hover:text-pink-600 transition-colors duration-200 py-1 touch-manipulation"
                >
                  QlikSense
                </a>
              </div>
            </div>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('about');
                setMenu(false);
              }}
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200 font-medium text-sm touch-manipulation"
            >
              About Us
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('blog');
                setMenu(false);
              }}
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200 font-medium text-sm touch-manipulation"
            >
              Blog
            </a>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                sectionSelect('contact');
                setMenu(false);
              }}
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors duration-200 font-medium text-sm touch-manipulation"
            >
              Contact Us
            </a>

            {/* Mobile Login Button */}
            <div className="px-4 py-2 border-t border-gray-100 mt-2">
              <button
                onClick={() => {
                  sectionSelect('login');
                  setMenu(false);
                }}
                className="flex items-center space-x-2 text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium text-sm w-full py-2 touch-manipulation"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Login</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;