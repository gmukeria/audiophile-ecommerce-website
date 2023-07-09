interface ProductImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface CategoryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface Feature {
  text: string;
}

interface Include {
  quantity: number;
  item: string;
}

interface GalleryImage {
  mobile: string;
  tablet: string;
  desktop: string;
}

interface OtherProduct {
  slug: string;
  name: string;
  image: ProductImage;
}

export interface productType {
  id: number;
  slug: string;
  name: string;
  image: ProductImage;
  category: string;
  categoryImage: CategoryImage;
  new: boolean;
  price: number;
  description: string;
  features: Feature[];
  includes: Include[];
  gallery: {
    first: GalleryImage;
    second: GalleryImage;
    third: GalleryImage;
  };
  others: OtherProduct[];
}

export interface ProductData {
  productData: productType[];
}
