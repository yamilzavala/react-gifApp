import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ addCategory }) => {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!category.trim().length) {
      return;
    } else {
      addCategory(category.trim());
      setCategory("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        name="category"
        placeholder="category"
        onChange={(e) => {
          setCategory(e.target.value);
        }}       
      />     
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};

export default AddCategory;
