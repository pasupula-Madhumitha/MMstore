import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: any;
  category: string;
  rating: number;
  description: string;
  stock: number;
};

interface WishlistContextType {
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: number) => void;
  isFavourite: (id: number) => boolean;
}

const WishlistContext = createContext<WishlistContextType>(
  {} as WishlistContextType
);

interface Props {
  children: ReactNode;
}

export const WishlistProvider = ({ children }: Props) => {
  const [wishlist, setWishlist] = useState<Product[]>([]);

  const addToWishlist = (product: Product) => {
    const exists = wishlist.find(
      item => item.id === product.id
    );

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (id: number) => {
    setWishlist(
      wishlist.filter(item => item.id !== id)
    );
  };

  const isFavourite = (id: number) => {
    return wishlist.some(item => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isFavourite,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};