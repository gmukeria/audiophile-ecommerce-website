import {
  RouterProvider,
  RootRoute,
  Outlet,
  Router,
  Route,
  RegisteredRouter,
} from "@tanstack/router";

import { Home, Products, ProductDetails, Checkout } from "./pages";
import { Header, Footer } from "./layouts";
import { createContext, useEffect, useState } from "react";
import { CartPropsType } from "./types/cartTypes";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const checkoutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/checkout",
  component: Checkout,
});

const headphonesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/$category",
  component: Products,
});

const productDetailsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/product/details/$productId",
  component: ProductDetails,
});

const speakersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/speakers",
  component: Home,
});

const earphonesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/earphones",
  component: Home,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  headphonesRoute,
  speakersRoute,
  earphonesRoute,
  productDetailsRoute,
  checkoutRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface RegisteredRouter {
    router: typeof router;
  }
}

export const CartContext = createContext({});

function Root() {
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

    // Check if the product already exists in the cart
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
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </CartContext.Provider>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
