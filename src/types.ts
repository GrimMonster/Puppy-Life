export type PetType = 'all' | 'cat' | 'dog' | 'both';

export type ProductCategory = 
  | 'all'
  | 'higiene'
  | 'brinquedos'
  | 'conforto'
  | 'alimentacao'
  | 'passeio';

export interface Product {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  price: string;
  originalPrice?: string;
  discountPercentage?: number;
  imageUrl: string;
  images?: string[];
  affiliateUrl: string;
  category: ProductCategory;
  petType: PetType;
  badge?: string;
  rating: number;
  reviewCount: number;
  isHero?: boolean;
  features?: string[];
  platform?: 'Mercado Livre' | 'Shopee' | 'Amazon' | 'Petz';
}
