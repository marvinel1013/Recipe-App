import React, { useEffect, useState } from "react";
import Search from "../components/Search/Search";
import Categories from "../components/Categories/Categories";
import MealListing from "../components/MealListing/MealListing";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function Meals() {
  const [selectedBadge, setSelectedBadge] = useState("Beef");
  const [searchText, setSearchText] = useState("");

  const fetchMealsByCategory = async () => {
    const { data } = await axios.get(`/filter.php?c=${selectedBadge}`);
    return data.meals;
  };

  const { data, isLoading } = useQuery(
    ["selectedMeal", selectedBadge],
    fetchMealsByCategory
  );

  const fetchMealsSearch = async () => {
    const { data } = await axios.get(`/search.php?s=${searchText}`);
    return data;
  };

  const { data: mealSearch, isLoading: searchLoading } = useQuery(
    ["searchMeals", searchText],
    fetchMealsSearch
  );

  return (
    <div className=" max-w-screen-lg min-h-full py-8 container mx-auto mt-8">
      <Search searchText={searchText} setSearchText={setSearchText} />
      <Categories
        selectedBadge={selectedBadge}
        setSelectedBadge={setSelectedBadge}
        setSearchText={setSearchText}
      />
      <MealListing
        data={data}
        isLoading={isLoading}
        mealSearch={mealSearch}
        searchText={searchText}
        searchLoading={searchLoading}
      />
    </div>
  );
}

export default Meals;
