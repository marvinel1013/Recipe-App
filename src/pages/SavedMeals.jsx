import React from "react";
import SavedMealCard from "../components/SavedMealsList/SavedMealCard";

function SavedMeals({ savedMeal }) {
  return (
    <div className=" container mx-auto px-5 pb-20 mt-14 min-h-full md:min-h-0">
      <h1 className="md:text-3xl md:px-20 text-center md:text-start text-xl font-bold underline text-[#ed6e3a] mb-10">
        My Saved Meal List
      </h1>
      {savedMeal.length ? (
        <div className="flex flex-wrap justify-center md:justify-start">
          {savedMeal.map((save, index) => (
            <SavedMealCard save={save} key={index} />
          ))}
        </div>
      ) : (
        <h2 className="md:text-2xl text-center text-[#e9b08e]">
          You have no saved Meals.
        </h2>
      )}
    </div>
  );
}

export default SavedMeals;
