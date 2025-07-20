import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag, Share2, ExternalLink } from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage';

const Article = () => {
  const { id } = useParams();

  // Simulation de la récupération de l'article
  const articles = {
    'thiouraye-encens': {
      title: 'Thiouraye et encens – Les secrets des senteurs envoûtantes du Sénégal',
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744524088/Cr%C3%A9ation_sans_titre_9_c4v7ac.png',
      readTime: '12 min',
      category: 'Tradition',
      keywords: ['Thiouraye', 'encens traditionnel', 'rituel sénégalais', 'bien-être', 'purification', 'spiritualité', 'patrimoine culturel'],
      introduction: "Le Thiouraye, trésor olfactif du Sénégal, incarne l'essence même de notre tradition ancestrale. Cet encens précieux, transmis de génération en génération, est bien plus qu'un simple parfum – c'est un art de vivre, un rituel quotidien qui purifie l'esprit et enchante les sens. Dans la culture sénégalaise, le Thiouraye occupe une place centrale dans les pratiques spirituelles et sociales, créant des liens entre le passé et le présent, entre le sacré et le quotidien.",
      sections: [
        {
          title: "L'Héritage Millénaire du Thiouraye",
          content: "L'histoire du Thiouraye remonte à plusieurs siècles, ancrée dans les traditions des royaumes du Sénégal pré-colonial. Ce mélange d'encens était utilisé par les griots lors des cérémonies royales, par les marabouts dans leurs pratiques spirituelles, et par les familles nobles pour marquer les événements importants. Composé principalement de bois précieux comme le santal, de résines aromatiques et d'herbes séchées, chaque recette familiale était jalousement gardée et transmise oralement. Les femmes, gardiennes de ces traditions, maîtrisaient l'art de la préparation, mélangeant les ingrédients selon des proportions précises héritées de leurs mères et grand-mères."
        },
        {
          title: "Les Ingrédients Sacrés et Leur Symbolique",
          content: "Chaque composant du Thiouraye porte une signification spirituelle profonde. Le bois de santal, importé d'Inde via les routes commerciales transsahariennes, symbolise la pureté et la méditation. L'encens blanc représente l'élévation spirituelle, tandis que les résines locales comme la myrrhe africaine apportent protection et purification. Les herbes aromatiques comme la verveine et la menthe sauvage, cueillies selon le calendrier lunaire, ajoutent leurs vertus apaisantes. Cette combinaison crée un parfum complexe qui évolue au fil de la combustion, racontant une histoire olfactive unique à chaque usage."
        },
        {
          title: "Les Bienfaits Purifiants et Thérapeutiques",
          content: "Au-delà de son aspect olfactif, le Thiouraye possède de nombreuses vertus reconnues par la médecine traditionnelle sénégalaise. Sa fumée purifiante chasse les énergies négatives et assainit l'atmosphère, créant un environnement propice à la méditation et à la paix intérieure. Les propriétés antibactériennes naturelles de ses composants en font un désinfectant naturel, particulièrement apprécié pendant la saison des pluies. Sur le plan psychologique, son parfum apaisant réduit le stress et favorise un sommeil réparateur. Les tradipraticiens l'utilisent également pour soulager les maux de tête et purifier les voies respiratoires."
        },
        {
          title: "L'Art Sacré de la Préparation",
          content: "La préparation du Thiouraye est un rituel en soi, qui demande patience, respect et savoir-faire. Traditionnellement effectuée par les femmes âgées de la famille, cette préparation suit un protocole précis. D'abord, les ingrédients sont bénis et purifiés. Puis, ils sont broyés séparément selon des mouvements circulaires spécifiques, dans le sens des aiguilles d'une montre pour attirer les bonnes énergies. Le mélange final s'effectue pendant les heures propices, généralement à l'aube ou au coucher du soleil, accompagné de prières et d'intentions positives. Cette préparation minutieuse garantit non seulement la qualité du mélange, mais aussi sa charge spirituelle."
        },
        {
          title: "Les Rituels de Combustion Traditionnels",
          content: "L'utilisation du Thiouraye obéit à des codes précis transmis oralement. Le brasero en terre cuite, préalablement purifié, est placé au centre de la pièce. Les charbons ardents, disposés en croix, symbolisent les quatre points cardinaux. Le Thiouraye est ajouté progressivement, par petites pincées, permettant à chaque note aromatique de s'exprimer pleinement. Pendant la combustion, il est d'usage de réciter des versets coraniques ou des invocations traditionnelles, créant une atmosphère de recueillement. La fumée est dirigée vers chaque coin de la pièce à l'aide d'un éventail en feuilles de palmier, chassant symboliquement les mauvaises influences."
        },
        {
          title: "Le Thiouraye dans la Société Sénégalaise Contemporaine",
          content: "Aujourd'hui, le Thiouraye demeure omniprésent dans la société sénégalaise moderne. Dans les familles urbaines, il marque les moments importants : accueil des invités, célébrations religieuses, cérémonies de baptême. Les bureaux et commerces l'utilisent pour créer une atmosphère propice aux affaires et éloigner la malchance. Cette pratique transcende les classes sociales et les appartenances religieuses, unissant les Sénégalais autour d'un patrimoine olfactif commun. Les jeunes générations, même celles de la diaspora, perpétuent cette tradition, adaptant les rituels aux contraintes de la vie moderne tout en préservant leur essence spirituelle."
        }
      ]
    },
    'huiles-parfumees': {
      title: 'Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées',
      image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1744526750/Cr%C3%A9ation_sans_titre_10_jxewp5.png',
      readTime: '10 min',
      category: 'Bien-être',
      keywords: ['huiles naturelles', 'soins traditionnels', 'beauté holistique', 'rituel beauté', 'aromathérapie', 'soin de soi', 'tradition africaine'],
      introduction: "Les huiles parfumées, joyaux de la tradition cosmétique africaine, représentent un héritage millénaire qui allie beauté, bien-être et spiritualité. Ces précieux élixirs, issus d'un savoir-faire ancestral, témoignent de la profonde connaissance que nos ancêtres avaient des propriétés des plantes et de leur pouvoir transformateur sur le corps et l'esprit. Chaque goutte renferme des siècles de sagesse féminine, transmise de mère en fille dans le secret des cours intérieures.",
      sections: [
        {
          title: "L'Histoire des Huiles Parfumées en Afrique",
          content: "L'usage des huiles parfumées en Afrique remonte à l'Égypte antique, où elles étaient réservées aux pharaons et aux prêtresses. Cette tradition s'est propagée à travers le continent via les routes commerciales, s'enrichissant des spécificités locales. En Afrique de l'Ouest, les reines et nobles utilisaient des mélanges sophistiqués pour marquer leur rang social et séduire. Ces huiles servaient aussi de monnaie d'échange et de dot lors des mariages. Les recettes, jalousement gardées par les matrones de chaque clan, constituaient un véritable trésor familial transmis oralement."
        },
        {
          title: "La Science Ancestrale des Mélanges",
          content: "La création d'huiles parfumées obéit à une science complexe maîtrisée par les femmes traditionnelles. Chaque huile de base - karité, coco, sésame - est choisie pour ses propriétés spécifiques. Les fragrances sont extraites par distillation, macération ou enfleurage, techniques perfectionnées au fil des siècles. L'art du mélange respecte des proportions précises et des temps de maturation, créant des synergies olfactives uniques. Cette expertise, basée sur l'observation empirique et la transmission orale, rivalisait avec les techniques les plus sophistiquées de l'époque."
        },
        {
          title: "Les Vertus Thérapeutiques et Spirituelles",
          content: "Au-delà de leur fonction esthétique, les huiles parfumées possèdent de nombreuses vertus thérapeutiques reconnues par la médecine traditionnelle. Certaines favorisent la circulation sanguine, d'autres apaisent les tensions musculaires ou nourrissent la peau en profondeur. Sur le plan spirituel, elles créent un bouclier énergétique protecteur et attirent les bonnes vibrations. Les tradipraticiens les utilisent pour rééquilibrer les chakras et harmoniser l'aura. Cette approche holistique de la beauté intègre le corps, l'esprit et l'âme dans un soin global."
        },
        {
          title: "Les Rituels d'Application Traditionnels",
          content: "L'application des huiles parfumées suit des rituels précis qui maximisent leurs bienfaits. Traditionnellement effectuée le matin à l'aube ou le soir après le bain, elle commence par une purification spirituelle. Les huiles sont réchauffées entre les paumes en récitant des intentions positives, puis appliquées selon des mouvements circulaires spécifiques. Chaque partie du corps reçoit une attention particulière : le front pour la clarté mentale, le cœur pour l'amour, les poignets pour la force. Cette gestuelle codifiée transforme le soin cosmétique en véritable méditation active."
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

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
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
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
                  className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
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
            <p className="text-xl leading-relaxed mb-12 text-gray-700 font-light">
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
                <h2 className="text-3xl font-playfair mb-6 text-gray-800">{section.title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{section.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Recommended Articles Section */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <h3 className="text-2xl font-playfair mb-6">Articles Recommandés</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link 
                to="/categories/incense" 
                className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    Découvrir nos Encens Traditionnels
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Explorez notre collection d'encens authentiques
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </Link>

              <Link 
                to="/categories/women" 
                className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors group"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                    Collection Huiles Parfumées
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    Nos huiles traditionnelles pour le corps
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </Link>
            </div>
          </motion.div>

          {/* Share Section */}
          <motion.div
            className="border-t border-gray-200 mt-12 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">Partager cet article</span>
                <button 
                  onClick={handleShare}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  title="Partager cet article"
                >
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <Link
                to="/blog"
                className="text-primary hover:text-primary/80 transition-colors font-medium"
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