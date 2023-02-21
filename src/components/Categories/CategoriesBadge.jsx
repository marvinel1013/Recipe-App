import React from "react";

function CategoriesBadge(props) {
  const { category, setSelectedBadge, selectedBadge, setSearchText } = props;

  const handleSelectCategory = () => {
    setSelectedBadge(category.strCategory);
    setSearchText("");
  };

  return (
    <div className="md:mt-4 mt-2">
      <div>
        <span
          onClick={handleSelectCategory}
          className={`bg-[#442b20] md:p-4 p-3 rounded-md cursor-pointer md:text-lg text-[#e9b08e] ${
            selectedBadge === category.strCategory
              ? " border-[#a4330d] border-2 border-solid"
              : "border-2 border-[#442b20] border-solid"
          } `}
        >
          {category.strCategory}
        </span>
      </div>
    </div>
  );
}

export default CategoriesBadge;
