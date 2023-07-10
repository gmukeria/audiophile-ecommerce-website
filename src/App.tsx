import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Products, ProductDetails, Checkout } from "./pages";
import { CartPropsType } from "./types/cartTypes";
import CartContext from "./contexts/CartContext";
import { useEffect, useState } from "react";
import { Layout } from "./layouts";

function App() {
  const [cartData, setCartData] = useState<CartPropsType[]>([]);

  useEffect(() => {
    const cartDataJson = sessionStorage.getItem("cartData");
    if (cartDataJson) {
      const cartDataArr = JSON.parse(cartDataJson) as CartPropsType[];
      setCartData(cartDataArr);
    }
  }, []);

  const removeAll = () => {
    sessionStorage.removeItem("cartData");
    setCartData([]);
  };

  const quantityHandler = (productId: number, newQuantity: number) => {
    const updatedCartData = cartData.map((item) =>
      item.productId === productId ? { ...item, quantity: newQuantity } : item
    );

    sessionStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  const cartHandler = ({
    image,
    productId,
    name,
    quantity,
    price,
  }: CartPropsType) => {
    const updatedCartItem = { image, productId, name, quantity, price };
    let updatedCartData = [];

    const existingCartItemIndex = cartData.findIndex(
      (item) => item.productId === productId
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartData[existingCartItemIndex];
      const updatedQuantity = existingCartItem.quantity + quantity;

      updatedCartData = cartData.map((item, index) =>
        index === existingCartItemIndex
          ? { ...item, quantity: updatedQuantity }
          : item
      );
    } else {
      updatedCartData = [...cartData, updatedCartItem];
    }

    sessionStorage.setItem("cartData", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  const orderDoneHandler = () => {
    removeAll();
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        cartHandler,
        removeAll,
        orderDoneHandler,
        quantityHandler,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/:category" element={<Products />} />
            <Route
              path="/product/details/:productId"
              element={<ProductDetails />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
