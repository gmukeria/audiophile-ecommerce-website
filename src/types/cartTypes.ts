export interface CartDataType {
  [productId: number]: [name: string, quantity: number, price: number];
}

export interface CartPropsType {
  productId: number;
  image: string;
  name: string;
  quantity: number;
  price: number;
}
