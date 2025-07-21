export const productData = {
  encens: {
    formats: {
      small: {
        size: '150g',
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
      },
      large: {
        size: '300g',
        prices: {
          eur: 45,
          cad: 60,
          fcfa: 15000,
        },
      },
      discovery: {
        name: 'Box Découverte',
        contents: ['4 encens x 50g', '1 huile 15ml'],
        prices: {
          eur: 30,
          cad: 45,
          fcfa: 12000,
        },
      },
    },
    varieties: [
      {
        id: 'gardena',
        name: 'Gardena 🌿',
        description:
          "Une ode à la nature, florale et fruitée.Une alliance subtile entre les copeaux du Tchad, les pétales de rose et les agrumes, sublimée par des notes de lavande et de boutons de rose. Un parfum éclatant et raffiné.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Floral',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893950/gardena_tuauwr.png',
      },
       {
        id: 'douceur-menthe',
        name: 'douceur menthe 🍃 ',
        description:
          " Une brise fraîche et apaisante.Laissez-vous séduire par la légèreté rafraîchissante de la menthe alliée au Naak Jeedah. Une senteur pure et vivifiante qui purifie l'air et apporte une sensation de sérénité absolue.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Premium',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743914438/Douceur_menthe_owwa7r.png',
      },
       {
        id: 'harmonie-sauvage',
        name: 'harmonie sauvage 🌿 ',
        description:
          "Une ambiance naturelle et apaisante.L'intensité du Soufou Médine s'unit à la profondeur du Nak Goudron et du Coco, offrant un parfum puissant et charismatique. Une invitation à renouer avec la nature dans toute sa splendeur. ",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Boisé',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743921041/harmonie_sauvage_1_n96goi.png',
      },
       {
        id: 'cocktail',
        name: 'cocktail 🍹',
        description:
          "Une composition audacieuse, un équilibre parfait.Un mélange sophistiqué où chaque note s'unit harmonieusement pour offrir une expérience olfactive unique et exaltante.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Tropical',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1744522052/Cr%C3%A9ation_sans_titre_8_diw9cz.png',
      },
       {
        id: 'reve-tropical',
        name: 'rêve tropical 🌴',
        description:
          "Un voyage sensoriel au coeur des îles exotiques.Laissez-vous transporter par un tourbillon d'arômes ensoleillés où les encens se marient harmonieusement aux notes sucrées d'ananas, de coco et de fruits exotiques. Une senteur à la fois gourmande et dépaysante, évoquant la chaleur d'un coucher de soleil sur une plage paradisiaque.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Tropical',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743920797/reve_tropical_portrait_rof099.png',
      },
      {
        id: 'symphonie-florale',
        name: 'Symphonie Florale 🌸',
        description:
          "Un bouquet envoûtant, délicat et enivrant.Une composition où les pétales de rose, le bakhour et la lavande se mêlent dans une danse florale exquise. Une senteur élégante et féminine qui évoque la grâce et la douceur.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Floral',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1744517396/Cr%C3%A9ation_sans_titre_7_drwx8v.png',
      },
      {
        id: 'gowe',
        name: 'Gowé Huilé 🌾',
        description:
          "Une essence précieuse, riche de tradition.Un encens puissant et authentique, apprécié pour sa profondeur envoûtante et son héritage olfactif intemporel.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Boisé',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893950/gowé_1_b5kvwd.png',
        seasonal: true,
        availableMonth: 12,
        onlyLargeFormat: true,
      },
      {
        id: 'frenesie',
        name: 'Frénésie 💫',
        description:
          "Un tourbillon de senteurs audacieuses et puissantes.Le Diguidié et le Sarkhatan fusionnent dans une fragrance enivrante et sensuelle. Une explosion olfactive captivante, parfaite pour les esprits libres et audacieux.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Boisé',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893950/frénésie_otph8e.png',
      },
       {
        id: 'feu-dore',
        name: 'Feu Doré 🔥',
        description:
          "Une fragrance ardente, vibrante et solaire. L'éclat des agrumes allié à la profondeur du Soufou Médine crée un encens à la fois dynamique et sophistiqué. Parfait pour illuminer votre intérieur d'une énergie pétillante. ",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Premium',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893949/feu_doré_2_zzbrka.png',
      },
      {
        id: 'mystere-des-bois',
        name: 'Mystère des Bois 🌲',
        description:
          "Un parfum boisé, noble et envoûtant.Une alchimie subtile entre le Bois de Santal, le Bois d'Oud et le bois Tchad révélant une senteur à la fois profonde et majestueuse. Idéal pour une ambiance feutrée et luxueuse..",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Boisé',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743922982/ChatGPT_Image_Apr_2_2025_06_32_32_PM.png_fqx6qy.png',
      },
       {
        id: 'eclat-rouge',
        name: 'Éclat Rouge ✨',
        description:
          "Une évasion sensorielle, intense et sophistiquée.Plongez dans un univers de mystère et de passion avec Éclat Rouge. L'accord profond du Naak Jeedah et du Bakhour dévoile une senteur envoûtante et luxueuse, parfaite pour habiller vos espaces d'une aura chaleureuse et raffinée.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7000,
        },
        category: 'Premium',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893949/eclat_rouge_last_ij43u9.png',
        bestSeller: true,
      },
    ],
  },
  womenCollection: {
    formats: {
      oil: {
        size: '50ml',
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7500,
        },
      },
      mist: {
        size: '50ml',
        prices: {
          eur: 21,
          cad: 28,
          fcfa: 8000,
        },
      },
    },
    products: [
      {
        id: 'nayla',
        name: 'Nayla ☀',
        description:
          "Inspirée de la fraîcheur vibrante des agrumes, Nayla incarne la radiance et la vivacité d'une femme solaire et élégante.",
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743920620/nayla_last_yytnl1.png',
      },
      {
        id: 'selma',
        name: 'Salma 🍒',
        description:
          'Une fragrance délicate et séduisante, où le musc et les fruits rouges se mêlent pour créer une allure à la fois douce et mystérieuse.',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894099/selmat_last_last_e0gyon.png',
      },
     
      {
        id: 'mayssane',
        name: 'Mayssane ✨',
        emoji: '',
        description:
          "Une essence opulente et envoûtante, entre le Médine, l'oud et la douceur de l'orient, idéale pour celles qui recherchent une touche d'extravagance et de raffinement.",
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/mayssane_last_bgzxdp.png',
      },
      {
        id: 'saphira',
        name: 'Saphira 🌺',
        description:
          'Une fragrance paradisiaque, un véritable voyage sensoriel aux fruits tropicaux, coco et ananas, sur un fond d\'encens subtilement envoûtant.',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894098/saphira_last_ywevn7.png',
      },
      {
        id: 'liyana',
        name: 'Liyana 🌸',
        description:
          "Un parfum doux et raffiné, où les pétales de rose, la lavande et l'orange se rencontrent pour créer une sensation de fraîcheur florale élégante et intemporelle.",
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894096/LILIYANA_HUILE_LAST_gpfuqm.png',
      },
    ],
  },
  menCollection: {
    formats: {
      oil: {
        size: '50ml',
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7500,
        },
      },
      mist: {
        size: '50ml',
        prices: {
          eur: 25,
          cad: 30,
          fcfa: 9000,
        },
      },
    },
    products: [
      {
        id: 'luxe-homme',
        name: 'Luxe Homme 🔥',
        description:
          'Une fusion envoûtante entre fraîcheur, sensualité et intensité boisée. Une fragrance masculine affirmée, puissante et raffinée.',
        notes: ['Notes fraîches', 'Boisé', 'Sensuel'],
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893954/luxe_homme_nmj8ns.png',
      },
    ],
  },
  ambientFragrances: {
    products: [
      {
        id: 'huile-bruler-1',
        name: 'Huile à Brûler Senteur Oud',
        description:
          "Une huile parfumée aux notes de oud authentique pour créer une atmosphère mystérieuse et envoûtante dans votre intérieur. Son parfum oriental profond transforme instantanément l'ambiance de votre maison.",
        prices: {
          eur: 20,
          cad: 25,
          fcfa: 7500,
        },
        volume_ml: 50,
        notes: ['Notes Orientales', 'Oud Authentique'],
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743920568/huila_bruler_2_fci8fj.png',
      },
      {
        id: 'huile-bruler-2',
        name: 'Huile à Brûler Senteur Moderne',
        description:
          "Une huile parfumée contemporaine aux notes fraîches et élégantes. Cette fragrance moderne apporte une touche sophistiquée et raffinée à votre espace de vie.",
        prices: {
          eur: 14,
          cad: 20,
          fcfa: 5000,
        },
        volume_ml: 30,
        notes: ['Notes Fraîches', 'Élégance Moderne'],
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893954/huile_%C3%A0_bruler_1_last_gv27hc.png',
      },
      {
        id: 'parfum-ambiance',
        name: "Parfum d'Ambiance",
        description:
          "Un parfum d'ambiance raffiné qui transforme l'atmosphère de votre intérieur. Ses notes florales et ambrées créent un environnement accueillant.",
        prices: {
          eur: 21,
          cad: 28,
          fcfa: 8000,
        },
        volume_ml: 300,
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743894097/parfum_de_chambre_last_iprd5l.png',
      },
    ],
  },
  boxes: {
    products: [
      {
        id: 'box-decouverte',
        name: 'Box Découverte',
        description: 'Une sélection parfaite pour découvrir nos meilleures fragrances. Contient 4 encens de 50g et 1 huile de 15ml.',
        contents: ['4 encens x 50g', '1 huile 15ml'],
        prices: {
          eur: 30,
          cad: 45,
          fcfa: 12000,
        },
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893950/box_decouverte.png',
      },
      {
        id: 'box-vip-caviar',
        name: 'Box VIP Caviar',
        description: 'Notre box premium exclusive avec une sélection luxueuse de nos produits les plus raffinés. Une expérience olfactive d\'exception.',
        contents: ['Sélection premium de fragrances exclusives', 'Produits de luxe'],
        prices: {
          eur: 95,
          cad: 135,
          fcfa: 45000,
        },
        image: 'https://res.cloudinary.com/dkzwityrq/image/upload/v1743893950/box_vip_caviar.png',
      },
    ],
  },
  blog: {
    articles: [
      {
        id: 'thiouraye-encens',
        title: 'Thiouraye et encens – Les secrets des senteurs envoûtantes du Sénégal',
        excerpt:
          'Découvrez l\'art ancestral du Thiouraye, l\'encens traditionnel sénégalais aux vertus purifiantes et relaxantes. Une exploration approfondie des rituels et traditions qui font la richesse de notre patrimoine olfactif millénaire.',
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1744524088/Cr%C3%A9ation_sans_titre_9_c4v7ac.png',
        readTime: '12 min',
        category: 'Tradition',
      },
      {
        id: 'rituels-beaute',
        title: 'Les Rituels de Beauté Ancestraux : Guide Complet des Huiles Parfumées',
        excerpt:
          "Plongez dans l'univers fascinant des rituels de beauté transmis de génération en génération. Découvrez comment les huiles parfumées traditionnelles transforment votre routine quotidienne en une expérience unique qui nourrit le corps et élève l'âme.",
        image:
          'https://res.cloudinary.com/dkzwityrq/image/upload/v1744165409/Cr%C3%A9ation_sans_titre_gspoyp.png',
        readTime: '10 min',
        category: 'Bien-être',
      },
    ],
  },
};