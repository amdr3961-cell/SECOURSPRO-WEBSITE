export interface Formation {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  price: number;
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Professionnel";
  category: string;
  image: string;
  features: string[];
  certification: boolean;
  maxParticipants: number;
  nextSession: string;
  popular: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export const formations: Formation[] = [
  {
    id: "psc1",
    title: "PSC1 - Prévention et Secours Civiques",
    description: "Formation complète aux gestes de premiers secours pour le grand public. Apprenez à sauver des vies au quotidien.",
    longDescription: "La formation PSC1 est la formation de base aux premiers secours. Elle vous permet d'acquérir les compétences nécessaires pour porter secours à toute personne victime d'un malaise ou d'un accident. Cette formation est accessible à tous dès l'âge de 10 ans.",
    duration: "7 heures",
    price: 350,
    level: "Débutant",
    category: "Grand Public",
    image: "/images/cpr-training.jpg",
    features: [
      "Protection et alerte des secours",
      "Gestes de premiers secours",
      "Massage cardiaque et utilisation du DAE",
      "Positions d'attente",
      "Hémorragies et plaies"
    ],
    certification: true,
    maxParticipants: 10,
    nextSession: "15 Juin 2026",
    popular: true
  },
  {
    id: "sst",
    title: "SST - Sauveteur Secouriste du Travail",
    description: "Formation obligatoire en entreprise. Devenez un acteur clé de la prévention et des secours sur votre lieu de travail.",
    longDescription: "La formation SST permet d'acquérir les compétences nécessaires pour intervenir efficacement face à une situation d'accident du travail. Le SST devient un acteur de la prévention dans son entreprise.",
    duration: "14 heures (2 jours)",
    price: 650,
    level: "Intermédiaire",
    category: "Entreprise",
    image: "/images/workplace-training.jpg",
    features: [
      "Situer le rôle du SST dans l'entreprise",
      "Protéger de façon adaptée",
      "Examiner la victime",
      "Alerter les secours",
      "Secourir la victime",
      "Prévention des risques professionnels"
    ],
    certification: true,
    maxParticipants: 10,
    nextSession: "20 Juin 2026",
    popular: true
  },
  {
    id: "dae",
    title: "Formation Défibrillateur (DAE)",
    description: "Maîtrisez l'utilisation du défibrillateur automatisé externe. Une compétence qui peut sauver des vies.",
    longDescription: "Cette formation spécifique vous apprend à reconnaître un arrêt cardiaque et à utiliser correctement un défibrillateur automatisé externe (DAE). Chaque minute compte lors d'un arrêt cardiaque.",
    duration: "4 heures",
    price: 200,
    level: "Débutant",
    category: "Grand Public",
    image: "/images/aed-training.jpg",
    features: [
      "Reconnaître un arrêt cardiaque",
      "Alerter les secours",
      "Réaliser une RCP de qualité",
      "Utiliser un DAE en toute sécurité",
      "Mise en situation pratique"
    ],
    certification: true,
    maxParticipants: 12,
    nextSession: "10 Juin 2026",
    popular: false
  },
  {
    id: "pediatric",
    title: "Premiers Secours Pédiatriques",
    description: "Formation spécialisée pour les parents, assistantes maternelles et professionnels de la petite enfance.",
    longDescription: "Cette formation vous prépare à réagir face aux accidents de la vie courante impliquant des nourrissons et des enfants. Les gestes spécifiques adaptés à leur physiologie sont enseignés.",
    duration: "8 heures",
    price: 450,
    level: "Intermédiaire",
    category: "Petite Enfance",
    image: "/images/pediatric-training.jpg",
    features: [
      "RCP nourrisson et enfant",
      "Obstruction des voies aériennes",
      "Chutes et traumatismes",
      "Brûlures et intoxications",
      "Convulsions et fièvre",
      "Noyade et électrocution"
    ],
    certification: true,
    maxParticipants: 8,
    nextSession: "25 Juin 2026",
    popular: true
  },
  {
    id: "mac-sst",
    title: "MAC SST - Maintien et Actualisation des Compétences",
    description: "Recyclage obligatoire tous les 24 mois pour maintenir votre certification SST.",
    longDescription: "Cette formation de recyclage permet de maintenir les compétences du SST à un niveau au moins équivalent voire supérieur à celui de sa formation initiale. Elle est obligatoire tous les 24 mois.",
    duration: "7 heures",
    price: 400,
    level: "Intermédiaire",
    category: "Entreprise",
    image: "/images/hero-training.jpg",
    features: [
      "Révision des gestes de secours",
      "Actualisation des protocoles",
      "Mises en situation",
      "Nouveautés réglementaires",
      "Évaluation des compétences"
    ],
    certification: true,
    maxParticipants: 10,
    nextSession: "18 Juin 2026",
    popular: false
  },
  {
    id: "urgences-entreprise",
    title: "Gestion des Urgences en Entreprise",
    description: "Formation avancée pour les responsables sécurité et chefs d'équipe. Coordonnez efficacement les situations de crise.",
    longDescription: "Cette formation prépare les cadres et responsables à gérer les situations d'urgence en entreprise : évacuation, confinement, coordination avec les secours professionnels.",
    duration: "21 heures (3 jours)",
    price: 1200,
    level: "Avancé",
    category: "Entreprise",
    image: "/images/certification.jpg",
    features: [
      "Organisation des secours en entreprise",
      "Plans d'évacuation et de confinement",
      "Communication de crise",
      "Coordination avec les secours externes",
      "Exercices et simulations",
      "Retour d'expérience"
    ],
    certification: true,
    maxParticipants: 12,
    nextSession: "1 Juillet 2026",
    popular: false
  },
  {
    id: "incendie",
    title: "Formation Incendie - EPI",
    description: "Équipier de Première Intervention. Apprenez à utiliser les extincteurs et à évacuer en toute sécurité.",
    longDescription: "Cette formation permet d'acquérir les connaissances théoriques et pratiques pour lutter contre un début d'incendie et participer à l'évacuation des locaux.",
    duration: "4 heures",
    price: 250,
    level: "Débutant",
    category: "Entreprise",
    image: "/images/hero-training.jpg",
    features: [
      "Triangle du feu et propagation",
      "Classes de feux",
      "Moyens d'extinction",
      "Manipulation des extincteurs",
      "Procédures d'évacuation",
      "Rôle de l'EPI"
    ],
    certification: true,
    maxParticipants: 12,
    nextSession: "12 Juin 2026",
    popular: false
  },
  {
    id: "formateur-sst",
    title: "Formation de Formateur SST",
    description: "Devenez formateur SST certifié. Transmettez les compétences de secourisme au sein de votre organisation.",
    longDescription: "Cette formation vous permet d'obtenir le certificat de formateur SST et de dispenser des formations SST au sein de votre entreprise ou organisme de formation.",
    duration: "56 heures (8 jours)",
    price: 2500,
    level: "Professionnel",
    category: "Formation de Formateurs",
    image: "/images/certification.jpg",
    features: [
      "Pédagogie appliquée à la prévention",
      "Animation de groupe",
      "Évaluation des stagiaires",
      "Organisation d'une formation SST",
      "Habilitation INRS",
      "Supports pédagogiques"
    ],
    certification: true,
    maxParticipants: 8,
    nextSession: "5 Juillet 2026",
    popular: false
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Fatima Zahra El Amrani",
    role: "Directrice RH",
    company: "Maroc Telecom",
    content: "Formation SST exceptionnelle ! Nos collaborateurs sont maintenant parfaitement préparés à réagir en cas d'urgence. Les formateurs de Secours Pro sont très professionnels et pédagogues.",
    rating: 5,
    avatar: "FZ"
  },
  {
    id: "2",
    name: "Ahmed Benali",
    role: "Responsable HSE",
    company: "OCP Group",
    content: "Nous avons formé plus de 200 collaborateurs avec Secours Pro. La qualité de la formation et le sérieux de l'équipe sont remarquables. Je recommande vivement !",
    rating: 5,
    avatar: "AB"
  },
  {
    id: "3",
    name: "Khadija Tazi",
    role: "Directrice",
    company: "Crèche Les Petits Anges",
    content: "La formation pédiatrique a été une révélation pour notre équipe. On se sent maintenant beaucoup plus confiantes face aux situations d'urgence avec les enfants.",
    rating: 5,
    avatar: "KT"
  },
  {
    id: "4",
    name: "Mohammed Alaoui",
    role: "Gérant",
    company: "Restaurant La Sqala",
    content: "Grâce à la formation, un de nos serveurs a pu sauver un client qui s'étouffait. Cette formation devrait être obligatoire pour tous les professionnels de la restauration.",
    rating: 5,
    avatar: "MA"
  },
  {
    id: "5",
    name: "Salma Bennani",
    role: "Infirmière Chef",
    company: "Clinique Agdal",
    content: "En tant que professionnelle de santé, j'apprécie le niveau technique de Secours Pro. Leurs formations sont conformes aux dernières recommandations internationales.",
    rating: 5,
    avatar: "SB"
  },
  {
    id: "6",
    name: "Youssef Chraibi",
    role: "Coach Sportif",
    company: "Gold's Gym Casablanca",
    content: "Formation DAE indispensable pour notre métier. J'ai appris les gestes qui sauvent et je me sens maintenant capable d'intervenir en cas d'arrêt cardiaque.",
    rating: 5,
    avatar: "YC"
  }
];

export const partners: Partner[] = [
  { id: "1", name: "Protection Civile du Maroc", logo: "PC" },
  { id: "2", name: "Croissant Rouge Marocain", logo: "CRM" },
  { id: "3", name: "Ministère de la Santé", logo: "MS" },
  { id: "4", name: "OFPPT", logo: "OFPPT" },
  { id: "5", name: "Université Mohammed V", logo: "UM5" },
  { id: "6", name: "CGEM", logo: "CGEM" },
  { id: "7", name: "Royal Air Maroc", logo: "RAM" },
  { id: "8", name: "ONCF", logo: "ONCF" }
];

export const statistics: Statistic[] = [
  { id: "1", value: "15,000+", label: "Personnes Formées", icon: "users" },
  { id: "2", value: "500+", label: "Entreprises Partenaires", icon: "building" },
  { id: "3", value: "98%", label: "Taux de Satisfaction", icon: "star" }
];

export const categories = [
  "Tous",
  "Grand Public",
  "Entreprise",
  "Petite Enfance",
  "Formation de Formateurs"
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('fr-MA', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price) + ' MAD';
};
