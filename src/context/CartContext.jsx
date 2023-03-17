import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const cartCrudContext = createContext();
const url = "https://star-spark-pasta.glitch.me/api/products";

export function CartCrudContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);

  // feting cart details from local storage
  useEffect(() => {
    const cartObj = localStorage.getItem("cart");
    setCart(JSON.parse(cartObj));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((itemss) => {
        setItems(itemss);
      });
  }, []);

  const navigate = useNavigate();

  function navigateToPage(path) {
    console.log("path : ", path);
    navigate(path);
  }

  function updateItem(item) {
    setItem(item);
  }

  function updateCart(carts) {
    setCart(carts);
    // localStorage.setItem("cart", JSON.stringify(carts));
  }

  const value = {
    cart,
    setCart,
    navigateToPage,
    items,
    setItems,
    item,
    updateItem,
    updateCart,
  };
  // console.log(children)
  return (
    <cartCrudContext.Provider value={value}>
      {children}
    </cartCrudContext.Provider>
  );
}

export function useCartCrud() {
  return useContext(cartCrudContext);
}
