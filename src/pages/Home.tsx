import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, Star, Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import OptimizedImage from '../components/OptimizedImage';
import FAQPreview from '../components/FAQPreview';
import { productData } from '../data/products';

// Product interface for Home page
interface HomeProduct {
  id: string;
  name: string;
  description: string;
  category?: string;
  image?: string;
  prices?: {
    eur?: number;
    cad?: number;
    fcfa?: number;
  };
  [key: string]: any; // For additional flexible properties
}

const WelcomeSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      className="py-20 bg-white"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-playfair mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bienvenue chez Senteurs by Mabi
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Plongez dans un univers où chaque fragrance raconte une histoire, où chaque senteur évoque une émotion. 
            Découvrez notre collection de parfums d'exception qui subliment votre quotidien.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: <Heart className="w-12 h-12 text-primary" />,
              title: "Passion Artisanale",
              description: "Des créations uniques nées d'un savoir-faire transmis de génération en génération"
            },
            {
              icon: <Star className="w-12 h-12 text-primary" />,
              title: "Excellence",
              description: "Une sélection rigoureuse d'ingrédients nobles pour des fragrances d'exception"
            },
            {
              icon: <Sparkles className="w-12 h-12 text-primary" />,
              title: "Innovation",
              description: "L'alliance parfaite entre tradition ancestrale et créativité contemporaine"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-playfair mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const CollectionSection = ({ 
  title, 
  subtitle, 
  products, 
  category,
  link,
  displayCount = 2
}: { 
  title: string;
  subtitle: string;
  products: HomeProduct[];
  category: string;
  link: string;
  displayCount?: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const displayProducts = products.slice(0, displayCount);

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-playfair mb-4">{title}</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 ${displayCount > 2 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 mb-8`}>
          {displayProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProductCard
                {...product}
                category={category}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            to={link}
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            <span>Voir toute la collection</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const AboutPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-playfair mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Senteurs by Mabi est bien plus qu'une marque, c'est une histoire, une passion, un héritage. 
              C'est l'aboutissement d'une passion transmise de mère en fille.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Chaque création est le fruit d'un savoir-faire unique, perpétuant une tradition d'excellence 
              et d'innovation dans l'art des senteurs.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <span>Découvrir notre histoire</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden"
          >
            <OptimizedImage
              src="https://res.cloudinary.com/dkzwityrq/image/upload/v1743893949/brume_femme_rgqpi7.png"
              alt="Notre histoire"
              className="w-full h-[600px] object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const articles = productData.blog.articles;

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-playfair mb-4">Notre Blog</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos articles sur l'art des senteurs et les rituels bien-être
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <OptimizedImage
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                <Link
                  to={`/blog/${article.id}`}
                  className="inline-flex items-center text-primary hover:text-primary/80"
                >
                  <span>Lire l'article</span>
                  <BookOpen className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
          >
            <span>Voir tous les articles</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  const selectedIncenseProducts = productData.encens.varieties.filter(product => 
    ['eclat-rouge', 'feu-dore', 'gardena'].includes(product.id)
  ).map(product => ({
    ...product,
    prices: {
      eur: productData.encens.formats.small.prices.eur,
      cad: productData.encens.formats.small.prices.cad,
      fcfa: productData.encens.formats.small.prices.fcfa
    },
    size: productData.encens.formats.small.size
  }));

  const womenProducts = productData.womenCollection.products.map(product => ({
    ...product,
    prices: productData.womenCollection.formats.oil.prices,
    size: productData.womenCollection.formats.oil.size
  }));

  const menProducts = productData.menCollection.products.map(product => ({
    ...product,
    prices: productData.menCollection.formats.oil.prices,
    size: productData.menCollection.formats.oil.size
  }));

  const ambientProducts = productData.ambientFragrances.products;

  return (
    <>
      <Helmet>
        <title>Senteur by Mabi - Encens, Thiourayes, Huiles Parfumées et Parfums d'Ambiance</title>
        <meta name="description" content="Encens, thiourayes, huiles parfumées et parfums d'ambiance : explorez les senteurs raffinées de Senteur by Mabi pour un véritable moment de bien-être." />
        <meta name="keywords" content="encens, thiouraye, huiles parfumées, parfums d'ambiance, senteurs, bien-être, tradition sénégalaise, aromathérapie, luxe homme, collection femme" />
      </Helmet>
      
      <main className="bg-background">
        <Hero />
        <WelcomeSection />
      
      <CollectionSection
        title="Nos Encens"
        subtitle="Découvrez notre collection d'encens traditionnels aux senteurs envoûtantes."
        products={selectedIncenseProducts}
        category="Encens"
        link="/categories/incense"
        displayCount={3}
      />
      
      <CollectionSection
        title="Collection Femme"
        subtitle="Des fragrances délicates et raffinées pour sublimer votre féminité."
        products={womenProducts}
        category="Collection Femme"
        link="/categories/women"
      />
      
      <CollectionSection
        title="Collection Luxe Homme"
        subtitle="Une ligne exclusive dédiée aux hommes qui osent se démarquer."
        products={menProducts}
        category="Collection Homme"
        link="/categories/men"
      />
      
      <CollectionSection
        title="Parfums d'Ambiance"
        subtitle="Créez une atmosphère unique et envoûtante dans votre intérieur."
        products={ambientProducts}
        category="Parfum d'ambiance"
        link="/categories/ambient"
      />

        <AboutPreview />
        <BlogPreview />
        <FAQPreview />
        <Footer />
      </main>
    </>
  );
};

export default Home;