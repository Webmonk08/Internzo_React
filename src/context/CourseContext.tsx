import React, { useContext, useState } from "react";
import { Course } from "../Components/all_courses";

export interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  addTofav:(course: Course) => void;
  removeFromfav: (courseId: string) => void;
}


export const CartContext = React.createContext<CartContextType>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  addTofav:()=>{ },
  removeFromfav:()=>{ },
}
)
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
const CartProvider = ({ children }: { children: React.ReactNode }) => {


  const [cart, setCart] = useState<Course[]>([]);

  const addToCart = (course: Course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const removeFromCart = (courseId: string) => {
    setCart((prevCart) => prevCart.filter((course) => course.name !== courseId));
  };
  const addTofav = (course: Course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const removeFromfav = (courseId: string) => {
    setCart((prevCart) => prevCart.filter((course) => course.name !== courseId));
  };


  return <CartContext.Provider value={{ cart, addToCart, removeFromCart ,addTofav,removeFromfav}}>
    {children}
  </CartContext.Provider>
}

export default CartProvider