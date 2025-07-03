import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2 } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Article = () => {
  const { id } = useParams();

  // Simulation de la récupération de l'article
  const articles = {
    'thiouraye-encens': {
      title: 'Thiouraye et encens – Les secrets des senteurs envoûtantes du Sénégal',
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744524088/Cr%C3%A9ation_sans_titre_9_c4v7ac.png',
      readTime: '8 min',
      category: 'Tradition',
      keywords: ['Thiouraye', 'encens traditionnel', 'rituel sénégalais', 'bien-être', 'purification'],
      introduction: "Le Thiouraye, trésor olfactif du Sénégal, incarne l'essence même de notre tradition ancestrale. Cet encens précieux, transmis de génération en génération, est bien plus qu'un simple parfum – c'est un art de vivre, un rituel quotidien qui purifie l'esprit et enchante les sens.",
      sections: [
        {
          title: "L'Héritage du Thiouraye",
          content: "Plongez dans l'histoire millénaire du Thiouraye, où chaque grain d'encens raconte une histoire de tradition et de savoir-faire. Des méthodes de préparation ancestrales aux rituels contemporains, découvrez comment cet encens sacré continue d'enchanter les foyers sénégalais."
        },
        {
          title: "Les Bienfaits Purifiants",
          content: "Le Thiouraye ne se contente pas de parfumer, il purifie l'atmosphère et apaise l'esprit. Ses propriétés naturelles en font un allié précieux pour la méditation et le bien-être quotidien."
        },
        {
          title: "L'Art de la Combustion",
          content: "Maîtrisez les techniques traditionnelles pour une expérience olfactive optimale. De la préparation du brasero aux gestes ancestraux, chaque étape est un rituel qui honore notre patrimoine."
        }
      ]
    },
    'huiles-parfumees': {
      title: 'Les bienfaits des huiles parfumées pour le corps – Un rituel de beauté ancestral',
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1742078090/Mabi/senteurs/qigusntf8bkup2ih1coc.jpg',
      readTime: '6 min',
      category: 'Bien-être',
      keywords: ['huiles naturelles', 'soins traditionnels', 'beauté holistique', 'rituel beauté', 'aromathérapie'],
      introduction: "Les huiles parfumées, joyaux de la tradition cosmétique africaine, sont le fruit d'un savoir-faire ancestral qui allie beauté et bien-être. Chaque goutte renferme des siècles de connaissance et de bienfaits naturels.",
      sections: [
        {
          title: "L'Excellence des Huiles Naturelles",
          content: "Découvrez la richesse des huiles sélectionnées avec soin, leurs propriétés nourrissantes et leur impact sur le bien-être physique et émotionnel."
        },
        {
          title: "Rituels de Beauté Traditionnels",
          content: "Explorez les gestes ancestraux qui transforment l'application d'huile en véritable moment de connexion avec soi-même. Un art du soin qui transcende le simple geste beauté."
        },
        {
          title: "L'Harmonie des Sens",
          content: "Comprendre comment les fragrances naturelles influencent notre humeur et notre bien-être. Un voyage olfactif qui éveille les sens et nourrit l'âme."
        }
      ]
    }
  };

  const article = articles[id as keyof typeof articles];

  if (!article) {
    return (
      <div className="pt-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-playfair mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-primary hover:text-primary/80">
            Retour aux articles
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-background min-h-screen">
      <article className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                {article.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                {article.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-playfair mb-8 leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.keywords.map(keyword => (
                <span
                  key={keyword}
                  className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {keyword}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative aspect-video rounded-xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <OptimizedImage
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="prose prose-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl leading-relaxed mb-12">
              {article.introduction}
            </p>

            {article.sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-playfair mb-4">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Share Section */}
          <motion.div
            className="border-t border-gray-200 mt-12 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Partager cet article</span>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default Article;