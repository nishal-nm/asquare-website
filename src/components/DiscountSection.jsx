import { motion } from 'framer-motion';

export default function GroupDiscountSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 py-20 overflow-hidden">
      {/* Decorative shapes */}
      <motion.div
        className="absolute -top-10 -left-10 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -20, 0], y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h3
            className="text-4xl lg:text-5xl font-extrabold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Group Discount Offer
          </motion.h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            Bring your friends or colleagues and enjoy{' '}
            <span className="font-bold">exclusive discounts </span>
            on our professional IT training programs. Learn together, grow
            together, and fast-track your careers.
          </p>
          <motion.a
            href="https://asquaretechnologiesweb.com/contact-us/"
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold tracking-wide hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Get In Touch →
          </motion.a>
        </div>

        {/* Right Content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Image */}
          <img
            src="https://asquaretechnologiesweb.com/wp-content/uploads/2024/08/akson-1K8pIbIrhkQ-unsplash-1024x628.webp"
            alt="Students collaborating"
            className="w-full object-cover"
          />

          {/* Floating badge */}
          <motion.div
            className="absolute top-6 right-6 bg-white shadow-md px-4 py-2 text-sm font-semibold text-pink-600"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Save Upto 30%
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
