import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, Clock, Tag, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BlogArticle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées',
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Lien copié dans le presse-papier !');
    }
  };

  return (
    <>
      <Helmet>
        <title>Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées | Senteurs by Mabi</title>
        <meta name="description" content="Découvrez l'art ancestral des huiles parfumées traditionnelles. Guide complet des rituels de beauté, techniques d'application et bienfaits des huiles naturelles pour le corps." />
        <meta name="keywords" content="huiles parfumées, parfum naturel, senteurs, beauté ancestrale, rituel beauté, huiles corps, tradition africaine, aromathérapie" />
      </Helmet>

      <div className="pt-20 bg-background min-h-screen">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="mb-16">
            <Link 
              to="/blog"
              className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Retour aux articles
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                Bien-être
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-1" />
                10 min
              </div>
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-playfair mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées
            </motion.h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {['huiles naturelles', 'soins traditionnels', 'beauté holistique', 'rituel beauté', 'aromathérapie', 'tradition africaine'].map(keyword => (
                <span
                  key={keyword}
                  className="inline-flex items-center bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {keyword}
                </span>
              ))}
            </div>
          </header>

          <motion.div
            ref={ref}
            className="prose prose-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <section className="mb-12">
              <p className="text-xl leading-relaxed text-gray-700 font-light">
                Chez <strong>Senteurs by Mabi</strong>, nous célébrons l'art millénaire des huiles parfumées, véritables joyaux de la tradition cosmétique africaine. 
                Ces précieux élixirs, transmis de génération en génération, témoignent d'une sagesse ancestrale qui allie beauté, bien-être et spiritualité. 
                Nos huiles parfumées ne sont pas de simples soins hydratants, mais de véritables alliés olfactifs conçus pour révéler votre charme naturel, 
                renforcer votre confiance et magnifier votre présence. Chaque goutte raconte une histoire, chaque application devient un rituel de beauté authentique.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-playfair mb-8">L'Héritage des Huiles Parfumées</h2>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-playfair mb-4">Une Tradition Millénaire</h3>
                <p>
                  L'usage des huiles parfumées remonte à l'Égypte antique, où elles étaient réservées aux pharaons et aux prêtresses des temples. 
                  Cette tradition s'est propagée à travers l'Afrique via les routes commerciales, s'enrichissant des spécificités locales de chaque région. 
                  En Afrique de l'Ouest, les reines et nobles utilisaient des mélanges sophistiqués pour marquer leur rang social et séduire par leur présence.
                </p>
              </div>

              <p>
                Ces huiles servaient aussi de monnaie d'échange lors des mariages et constituaient un trésor familial précieusement gardé. 
                Les recettes, jalousement protégées par les matrones de chaque clan, se transmettaient oralement de mère en fille, 
                créant un patrimoine olfactif unique à chaque lignée. Cette transmission orale garantissait l'authenticité et la pureté des formules traditionnelles.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-playfair mb-8">Trois Façons Sublimes d'Utiliser Nos Huiles</h2>
              
              <div className="space-y-12">
                <div className="border-l-4 border-primary pl-8">
                  <h3 className="text-2xl font-playfair mb-4">1. Le Bain Parfumé : Un Rituel de Purification</h3>
                  <p className="mb-4">
                    Transformez votre bain quotidien en véritable cérémonie de bien-être. Ajoutez 5 à 7 gouttes de votre huile parfumée préférée 
                    dans l'eau chaude du bain. L'eau chaude libère les molécules aromatiques, créant une vapeur parfumée qui enveloppe tout votre être.
                  </p>
                  <p className="mb-4">
                    Cette méthode ancestrale, pratiquée dans les palais africains, permet une diffusion optimale des fragrances. 
                    Votre peau absorbe délicatement les notes parfumées, vous laissant un sillage subtil qui vous accompagne durant des heures.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="flex items-start text-primary">
                      <Star className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Conseil de maître :</strong> Versez l'huile sous le jet d'eau chaude pour une meilleure dispersion. 
                      Allumez une bougie parfumée pour amplifier l'expérience sensorielle et créer une atmosphère de spa à domicile.</span>
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-accent pl-8">
                  <h3 className="text-2xl font-playfair mb-4">2. L'Application sur les Points de Pulsation : L'Art de la Séduction Subtile</h3>
                  <p className="mb-4">
                    Les points de pulsation sont les zones stratégiques où le sang circule près de la surface de la peau, générant une chaleur naturelle 
                    qui diffuse harmonieusement les fragrances. Appliquez une goutte d'huile sur vos poignets, derrière les oreilles, à la base du cou, 
                    dans le creux des coudes et derrière les genoux.
                  </p>
                  <p className="mb-4">
                    Cette technique millénaire, utilisée par les courtisanes de l'Orient et les reines d'Afrique, crée un sillage parfumé unique 
                    qui se révèle progressivement au fil de vos mouvements. Contrairement aux parfums alcoolisés qui peuvent agresser les peaux sensibles, 
                    nos huiles respectent l'équilibre naturel de votre épiderme.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="flex items-start text-accent">
                      <Star className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Rituel de beauté :</strong> Appliquez l'huile après la douche sur peau propre et encore légèrement humide. 
                      L'humidité aide à fixer le parfum et prolonge sa diffusion. Massez délicatement en mouvements circulaires pour une absorption optimale.</span>
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-gray-400 pl-8">
                  <h3 className="text-2xl font-playfair mb-4">3. Le Mélange avec votre Soin Corporel : L'Alliance Parfaite</h3>
                  <p className="mb-4">
                    Bien que nos huiles soient conçues pour parfumer et non pour hydrater, elles se marient harmonieusement avec votre lait corporel habituel. 
                    Cette technique permet de créer un soin personnalisé unique, alliant les bienfaits hydratants de votre crème aux vertus olfactives de nos huiles.
                  </p>
                  <p className="mb-4">
                    Dans votre paume, mélangez une noisette de lait corporel neutre avec 1 à 2 gouttes d'huile parfumée. 
                    Émulsionnez délicatement et appliquez sur l'ensemble du corps par mouvements ascendants, des pieds vers le cœur. 
                    Cette gestuelle, inspirée des massages ayurvédiques, active la circulation et optimise la diffusion du parfum.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="flex items-start text-gray-700">
                      <Star className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Astuce de pro :</strong> Utilisez cette méthode le matin pour rester parfumée toute la journée. 
                      Choisissez un lait corporel sans parfum pour ne pas créer de conflits olfactifs et laisser votre huile s'exprimer pleinement.</span>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-playfair mb-8">Les Vertus Secrètes de nos Huiles</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-playfair mb-4 text-primary">Propriétés Aromathérapeutiques</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Réduction du stress et de l'anxiété
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Amélioration de la qualité du sommeil
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Stimulation de la confiance en soi
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Harmonisation des émotions
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-playfair mb-4 text-accent">Bienfaits Spirituels</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Protection énergétique naturelle
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Attraction des énergies positives
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Ancrage et centrage personnel
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      Élévation de la vibration personnelle
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-playfair mb-6">Un Parfum de Peau, Un Geste d'Élégance</h2>
              <p className="mb-6">
                Nos huiles parfumées créent ce qu'on appelle un "parfum de peau" - une fragrance qui semble émaner naturellement de votre être. 
                Contrairement aux parfums alcoolisés qui peuvent masquer votre essence naturelle, nos huiles la subliment et la révèlent. 
                Elles deviennent partie intégrante de votre identité olfactive, créant une signature parfumée unique et personnelle.
              </p>
              <p>
                Cette approche respectueuse de la beauté naturelle s'inscrit dans une philosophie holistique où le parfum n'est pas un masque, 
                mais un révélateur. Il amplifie votre charisme naturel et crée une aura invisible qui attire et séduit en douceur. 
                Faites de votre routine quotidienne une expérience olfactive inoubliable avec <strong>Senteurs by Mabi</strong>.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-playfair mb-8">Foire aux Questions Détaillée</h2>
              
              <div className="space-y-8">
                {[
                  {
                    q: "Nos huiles ont-elles des propriétés hydratantes ?",
                    a: "Non, nos huiles sont exclusivement formulées pour parfumer. Elles ne contiennent pas d'agents hydratants et ne remplacent pas votre soin corporel habituel. Leur fonction première est de créer une signature olfactive unique et durable sur votre peau."
                  },
                  {
                    q: "Peut-on utiliser les huiles comme parfum quotidien ?",
                    a: "Absolument ! C'est même leur usage principal. Appliquées sur les points de pulsation, nos huiles offrent une alternative naturelle et douce aux parfums alcoolisés. Elles créent un sillage subtil qui évolue au fil de la journée selon votre chimie corporelle unique."
                  },
                  {
                    q: "Les huiles conviennent-elles aux peaux sensibles ?",
                    a: "Nos formules sans alcool sont généralement bien tolérées par les peaux sensibles. Cependant, nous recommandons toujours de réaliser un test de tolérance au pli du coude 24h avant la première utilisation complète, surtout si vous avez la peau réactive."
                  },
                  {
                    q: "Y a-t-il un risque de fini gras sur la peau ?",
                    a: "Nos huiles sont spécialement formulées pour être rapidement absorbées. Utilisées avec modération (quelques gouttes suffisent), elles ne laissent aucun film gras. La clé est dans le dosage : moins c'est plus efficace."
                  },
                  {
                    q: "Peut-on appliquer les huiles sur les cheveux ?",
                    a: "Nos huiles sont spécifiquement conçues pour un usage corporel. Nous déconseillons l'application sur le cuir chevelu ou les cheveux, car leur formulation n'est pas adaptée à ces zones qui ont des besoins spécifiques."
                  },
                  {
                    q: "Quelle est la durée de diffusion du parfum ?",
                    a: "La tenue varie selon votre type de peau, la zone d'application et les conditions climatiques. En moyenne, nos huiles parfument entre 6 à 10 heures. Les peaux plus grasses retiennent généralement mieux les fragrances que les peaux sèches."
                  },
                  {
                    q: "Comment optimiser la tenue de nos huiles ?",
                    a: "Pour maximiser la tenue : appliquez sur peau propre et légèrement humide, privilégiez les points de pulsation, évitez de frotter après application, et conservez vos huiles dans un endroit frais et à l'abri de la lumière."
                  },
                  {
                    q: "Peut-on mélanger plusieurs fragrances ?",
                    a: "Oui, mais avec parcimonie. Commencez par tester les mélanges sur une petite zone pour vérifier l'harmonie olfactive. Certaines de nos fragrances se marient parfaitement entre elles pour créer votre signature parfumée personnalisée."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h3 className="font-playfair text-xl mb-3 text-gray-800">{faq.q}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <footer className="border-t pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-playfair text-xl mb-4">Explorez nos Collections</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/categories/women" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Collection Femme - Nos huiles parfumées
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/men" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Collection Luxe Homme
                      </Link>
                    </li>
                    <li>
                      <Link to="/categories/ambient" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Huiles à brûler pour l'ambiance
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-playfair text-xl mb-4">Approfondir vos Connaissances</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/blog/thiouraye-encens" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        L'art du Thiouraye et des encens
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Questions fréquentes
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="flex items-center text-primary hover:text-primary/80 transition-colors">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Notre histoire et traditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Share Section */}
              <div className="flex items-center justify-between border-t pt-6 mb-8">
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

              <div className="text-center">
                <Link
                  to="/categories/women"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
                >
                  <Heart className="w-5 h-5" />
                  <span>Découvrir notre collection d'huiles parfumées</span>
                </Link>
              </div>
            </footer>
          </motion.div>
        </article>
      </div>
    </>
  );
};

export default BlogArticle;