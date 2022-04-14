export interface Products {
  id?: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

export interface RequestBodyProduct {
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
export interface ProductResponse {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}
