import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const categoriesData = ["One Punch", "Samurai x", "Dragon ball"];

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(categoriesData);

  const addCategory = (value: any) => {
    setCategories((cat) => [value, ...cat]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory addCategory={addCategory} />
      <hr />

      <ul>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ul>
    </>
  );
};

export default GiftExpertApp;
