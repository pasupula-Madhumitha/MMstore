import React, { createContext, useContext, useState } from "react";

type CategoryContextType = {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const CategoryContext = createContext<CategoryContextType>({
  selectedCategory: "All",
  setSelectedCategory: () => {},
});

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);