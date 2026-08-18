import { Product } from '../types';

/**
 * 🌟 PRODUTO HERÓI (DESTAQUE PRINCIPAL)
 * Link oficial Areia Kadi fornecido: https://meli.la/26DLQMB
 */
export const heroProduct: Product = {
  id: 'areia-kadi-biodegradavel',
  title: 'Areia Sanitária Kadi 4kg Grãos Finos',
  subtitle: 'Aquela areia que vira torrões instantâneos! 🐱',
  description: '100% biodegradável com grãos finos ultra confortáveis, neutralização imediata de odores e zero poeira para proteger o trato respiratório felino.',
  price: '37,90',
  originalPrice: '49,90',
  discountPercentage: 24,
  imageUrl: '/src/assets/images/kadi_cat_litter_pkg_1787016874124.jpg',
  affiliateUrl: 'https://www.mercadolivre.com.br/areia-sanitaria-kadi-4kg-graos-finos-biodegradavel-gatos-aquela-areia-que-vira-torroes/p/MLB44443088?pdp_filters=item_id%3AMLB7086892450&matt_tool=38524122&ua=70I8AFiBl7LqdPoBXKn46tf0SAohGkwvRUqQNd47ZMqYAKY#origin=share&sid=share&wid=MLB7086892450&action=copy',
  category: 'higiene',
  petType: 'cat',
  badge: '🔥 Destaque TikTok & Mais Vendida',
  rating: 4.9,
  reviewCount: 3420,
  isHero: true,
  features: [
    'Torrão firme instantâneo',
    'Sem poeira - Seguro para respiração',
    'Neutralização potente de odores'
  ],
  platform: 'Mercado Livre',
};

/**
 * 📦 LISTA PRINCIPAL DE PRODUTOS AFILIADOS
 * Edite ou adicione novos produtos facilmente abaixo!
 */
export const products: Product[] = [
  {
    id: 'pazinha-inox-areia-gatos',
    title: 'Pazinha Higiênica Coletora Inox Peneira',
    subtitle: 'Anti-desperdício de areia em Aço Inox Cirúrgico',
    description: 'Aço inoxidável de alta durabilidade, com espaçamento perfeito para separar torrões da areia Kadi sem quebrar e sem desperdício.',
    price: '42,90',
    originalPrice: '59,90',
    discountPercentage: 28,
    imageUrl: '/src/assets/images/cat_litter_scoop_inox_1787016758697.jpg',
    affiliateUrl: 'https://www.mercadolivre.com.br/pazinha-higienica-coletora-pa-caixa-areia-gatos-inox-peneira-prateado-boa-dica/p/MLB66492672?pdp_filters=item_id%3AMLB4902770957&matt_tool=38524122&ua=2iWkjmVOL7JQ9vUsQLsn9mKFwB8dtrRM_-WKx7kBgwBSsm4#origin=share&sid=share&wid=MLB4902770957&action=copy',
    category: 'higiene',
    petType: 'cat',
    badge: '🐱 Par com Areia Kadi',
    rating: 4.9,
    reviewCount: 1420,
    features: ['Aço Inox Cirúrgico', 'Cabo ergonômico', 'Peneira anti-desperdício'],
    platform: 'Mercado Livre',
  },
  {
    id: 'racao-quatree-life-gatos',
    title: 'Ração Quatree Life Gatos Adultos Salmão',
    subtitle: '10.1kg • Super Premium Sem Transgênicos',
    description: 'Alimento completo rico em ômegas 3 e 6, salmão selecionado, taurina para visão e coração, e controle do pH urinário felino.',
    price: '179,90',
    originalPrice: '219,90',
    discountPercentage: 18,
    imageUrl: '/src/assets/images/quatree_cat_food_1787016889656.jpg',
    affiliateUrl: 'https://www.mercadolivre.com.br/racao-quatree-life-gatos-ad-salmao-101kg-sem-transgenicos/p/MLB25336599?pdp_filters=item_id%3AMLB7085920124&matt_tool=38524122&ua=rhcjcqAAZMpqjmaVtaL4CelualSmAkE5HQB8ol_uF7LSQfs#origin=share&sid=share&wid=MLB7085920124&action=copy',
    category: 'alimentacao',
    petType: 'cat',
    badge: '🐟 Sem Transgênicos',
    rating: 4.9,
    reviewCount: 2150,
    features: ['Zero transgênicos e corantes', 'Controle bolas de pelo', 'Pelagem brilhante'],
    platform: 'Mercado Livre',
  },
  {
    id: 'formula-natural-fresh-meat-caes',
    title: 'Fórmula Natural Fresh Meat Cães Adultos',
    subtitle: '2.5kg • Portes Mini e Pequeno com Carne Fresca',
    description: 'Nutrição superior com carnes nobres desossadas, frutas, vegetais e antioxidantes naturais para cães de pequeno porte.',
    price: '89,90',
    originalPrice: '119,90',
    discountPercentage: 25,
    imageUrl: '/src/assets/images/formula_natural_dog_1787016901989.jpg',
    affiliateUrl: 'https://www.mercadolivre.com.br/formula-natural-fresh-meat-caes-adultos-mini-e-pequeno-25kg/p/MLB22501499?pdp_filters=item_id%3AMLB7125556160&matt_tool=38524122&ua=tASi04jEWK1p0ytmhG65fl-OqnknqDMB7uPwB7mTX5dafhw#origin=share&sid=share&wid=MLB7125556160&action=copy',
    category: 'alimentacao',
    petType: 'dog',
    badge: '🥩 Carne Fresca & Frutas',
    rating: 5.0,
    reviewCount: 1890,
    features: ['Carne fresca de frango', 'Frutas e vegetais', 'Alta palatabilidade'],
    platform: 'Mercado Livre',
  }
];
