import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Categories = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        key={category.name}
        style={{
          background: category.name === selectedCategory ? "#a855f7" : "transparent",
          color: category.name === selectedCategory ? "white" : "#ddd",
        }}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "#fff" : "#a855f7",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: category.name === selectedCategory ? 1 : 0.85,
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Categories;
