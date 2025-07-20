import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const articles = [
    {
      id: 'thiouraye-encens',
      title: 'Thiouraye et encens – Les secrets des senteurs envoûtantes du Sénégal',
      excerpt: "Découvrez l'art ancestral du Thiouraye, l'encens traditionnel sénégalais aux vertus purifiantes et relaxantes. Une exploration approfondie des rituels millénaires, des techniques de préparation ancestrales et de l'impact spirituel de ces fragrances sacrées dans la culture sénégalaise.",
      readTime: '12 min',
      category: 'Tradition',
      keywords: ['Thiouraye', 'encens traditionnel', 'rituel sénégalais', 'bien-être', 'purification', 'spiritualité', 'patrimoine culturel'],
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744524088/Cr%C3%A9ation_sans_titre_9_c4v7ac.png'
    },
    {
      id: 'huiles-parfumees',
      title: "Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées",
      excerpt: 'Plongez dans l\'univers fascinant des rituels de beauté transmis de génération en génération. Découvrez comment les huiles parfumées traditionnelles transforment votre routine quotidienne en une expérience sensorielle unique qui nourrit le corps, apaise l\'esprit et révèle votre beauté naturelle.',
      readTime: '10 min',
      category: 'Bien-être',
      keywords: ['huiles naturelles', 'soins traditionnels', 'beauté holistique', 'rituel beauté', 'aromathérapie', 'soin de soi', 'tradition africaine'],
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744526750/Cr%C3%A9ation_sans_titre_10_jxewp5.png'
    }
  ];

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
            Rituels des Bonnes Senteurs
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les secrets ancestraux des senteurs traditionnelles et des rituels millénaires. 
            Une invitation au voyage des sens à travers la richesse de notre patrimoine olfactif, 
            où chaque fragrance raconte une histoire et chaque geste perpétue une tradition séculaire.
            Explorez avec nous l'art subtil de vivre en harmonie avec les parfums naturels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" ref={ref}>
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h2 className="text-2xl font-playfair mb-4 leading-tight hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-4 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {article.keywords.slice(0, 4).map(keyword => (
                    <span
                      key={keyword}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      #{keyword}
                    </span>
                  ))}
                  {article.keywords.length > 4 && (
                    <span className="text-gray-400 text-sm">
                      +{article.keywords.length - 4} autres
                    </span>
                  )}
                </div>

                <Link to={`/blog/${article.id}`}>
                  <motion.button
                    className="flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
                    whileHover={{ x: 5 }}
                  >
                    <span className="mr-2">Lire l'article complet</span>
                    <BookOpen className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Section d'appel à l'action */}
        <motion.div
          className="text-center mt-16 p-8 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-playfair mb-4">
            Explorez nos Collections
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Découvrez nos fragrances authentiques et laissez-vous transporter par 
            l'art millénaire des senteurs traditionnelles.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/categories/incense"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Collection Encens
            </Link>
            <Link
              to="/categories/women"
              className="bg-accent text-gray-800 px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
            >
              Huiles Parfumées
            </Link>
            <Link
              to="/categories/ambient"
              className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
            >
              Parfums d'Ambiance
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;