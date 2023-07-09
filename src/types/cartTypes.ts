export interface CartDataType {
  [productId: number]: [name: string, quantity: number, price: number];
}

export interface CartPropsType {
  image: string;
  productId: number;
  name: string;
  quantity: number;
  price: number;
}
