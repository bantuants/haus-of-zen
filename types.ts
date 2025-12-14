export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  images: Array<{
    url: string;
    altText?: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: string;
    compareAtPrice?: string;
    availableForSale: boolean;
  }>;
  tags: string[];
  productType: string;
  vendor: string;
}

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  date: string;
}

export interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
  image: string;
  variantId: string;
}
