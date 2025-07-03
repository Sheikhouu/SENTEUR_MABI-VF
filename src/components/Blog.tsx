import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { BookOpen, Clock } from 'lucide-react';
import { productData } from '../data/products';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { articles } = productData.blog;

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Rituels Bonne odeur
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les secrets ancestraux des senteurs traditionnelles .
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-playfair mb-4 leading-tight">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {article.excerpt}
                </p>

                <Link to="/blog/huiles-parfumees">
                  <motion.button
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Lire l'article</span>
                    <BookOpen className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;