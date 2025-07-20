import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';
import CartButton from './CartButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    {
      id: 'encens',
      name: 'Encens',
      path: '/categories/incense',
      image:
        'https://res.cloudinary.com/dkzwityrq/image/upload/v1744166239/Création_sans_titre_3_muwjej.png',
    },
    {
      id: 'huiles-bruler',
      name: 'Huiles à brûler',
      path: '/categories/ambient',
      image:
        'https://res.cloudinary.com/dkzwityrq/image/upload/v1743920568/huila_bruler_2_fci8fj.png',
    },
    {
      id: 'collection-femme',
      name: 'Collection Femme',
      path: '/categories/women',
      image:
        'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png',
    },
    {
      id: 'collection-homme',
      name: 'Collection Luxe Homme',
      path: '/categories/men',
      image:
        'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893954/luxe_homme_photo_main_qycv0u.png',
    },
  ];

  const navLinks = [
    { id: 'accueil', name: 'Accueil', path: '/' },
    { id: 'histoire', name: 'Histoire', path: '/about' },
    { id: 'blog', name: 'Blog', path: '/blog' },
    { id: 'contact', name: 'Contact', path: '/contact' },
    { id: 'faq', name: 'FAQ', path: '/faq' },
  ];

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuVariants = {
    hidden: { x: '-100%' },
    visible: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: '-100%',
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-90'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center h-20">
            {/* Left section - Logo */}
            <div className="flex-1">
              <Link
                to="/"
                className="inline-block font-playfair text-2xl md:text-3xl font-bold transition-transform hover:scale-105"
              >
                <span className="text-primary">Senteurs</span>
                <span className="text-text"> By Mabi</span>
              </Link>
            </div>

            {/* Center section - Navigation Links */}
            <div className="hidden lg:flex items-center justify-center flex-1">
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4"
                >
                  <Link
                    to={link.path}
                    className="font-montserrat text-sm uppercase tracking-wide text-text hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Collections Dropdown */}
              <div
                className="relative px-4"
                onMouseEnter={() => setIsCollectionsOpen(true)}
                onMouseLeave={() => setIsCollectionsOpen(false)}
              >
                <motion.button
                  className="font-montserrat text-sm uppercase tracking-wide text-text hover:text-primary transition-colors flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Collections</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isCollectionsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </motion.button>

                <AnimatePresence>
                  {isCollectionsOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full right-0 mt-2 w-[300px] md:w-[600px] bg-white rounded-lg shadow-xl border border-gray-100 p-4 md:p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {collections.map((collection) => (
                          <Link
                            key={collection.id}
                            to={collection.path}
                            className="group relative overflow-hidden rounded-lg"
                          >
                            <div className="aspect-w-3 aspect-h-4">
                              <img
                                src={collection.image}
                                alt={collection.name}
                                className="w-full h-24 md:h-32 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center rounded-lg">
                                <span className="text-white font-medium text-center">
                                  {collection.name}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right section - Search & Cart */}
            <div className="flex items-center space-x-4 flex-1 justify-end">
              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden"
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-text" />
                ) : (
                  <Menu className="h-6 w-6 text-text" />
                )}
              </motion.button>

              {/* Search Bar & Cart - Desktop */}
              <div className="hidden lg:flex items-center space-x-4">
                <div className="w-64">
                  <SearchBar />
                </div>
                <CartButton />
              </div>

              {/* Cart Button - Mobile */}
              <div className="lg:hidden">
                <CartButton />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="pt-24 px-6">
              {/* Mobile Search */}
              <div className="mb-8">
                <SearchBar />
              </div>

              {/* Mobile Navigation Links */}
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.id}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={link.path}
                      className="block text-lg font-montserrat text-text hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Collections */}
              <div className="mt-8">
                <h2 className="text-xl font-playfair text-text mb-6">
                  Collections
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  {collections.map((collection) => (
                    <Link
                      key={collection.id}
                      to={collection.path}
                      className="relative overflow-hidden rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg">
                        <span className="text-white font-medium text-center">
                          {collection.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;