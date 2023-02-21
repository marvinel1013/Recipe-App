import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import CategoriesBadge from "./CategoriesBadge";

function Categories(props) {
  const { selectedBadge, setSelectedBadge, setSearchText } = props;
  const fetchCategories = async () => {
    const { data } = await axios.get("/categories.php");
    return data.categories;
  };

  const { data } = useQuery(["categories"], fetchCategories);

  return (
    <div className="flex flex-wrap gap-1 md:gap-2 mt-3 md:mt-5 md:px-0 px-4">
      {data &&
        data.map((category) => (
          <div key={category.idCategory} className="mb-4">
            <CategoriesBadge
              category={category}
              selectedBadge={selectedBadge}
              setSelectedBadge={setSelectedBadge}
              setSearchText={setSearchText}
            />
          </div>
        ))}
    </div>
  );
}

export default Categories;
