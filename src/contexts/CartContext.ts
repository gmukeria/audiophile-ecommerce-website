import { createContext } from "react";
import { CartPropsType } from "../types/cartTypes";

const CartContext = createContext<{
  cartData: CartPropsType[];
  removeAll: () => void;
  quantityHandler: (productId: number, quantity: number) => void;
  cartHandler: (item: CartPropsType) => void;
  orderDoneHandler: () => void;
}>({
  cartData: [],
  removeAll: () => {},
  quantityHandler: () => {},
  cartHandler: () => {},
  orderDoneHandler: () => {},
});

export default CartContext;
