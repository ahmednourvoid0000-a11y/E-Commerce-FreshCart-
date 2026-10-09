export interface productShopType {
  id: string;
  _id: string;
  title: string;
  images: string[];
  imageCover: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: categoryType;
  brand: brandType;
}

export interface categoryType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface brandType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface CartResponse {
  _id: string;
  cartOwner: string;
  products: ItemType[];
  totalCartPrice: string;
}

export interface ItemType {
  count: number;
  _id: string;
  price: number;
  product: productShopType;
}

export interface productBrandsType {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface orderType {
  shippingAddress: {
    details: string;
    phone: string;
    city: string;
    postalCode: string;
  };
}
