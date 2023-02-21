import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import MealDetails from "../../pages/MealDetails";
import Meals from "../../pages/Meals";
import SavedMeals from "../../pages/SavedMeals";

function Main() {
  /* Saved Meals STATE */
  const [savedMeal, setSavedMeal] = useState([]);

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("SAVED_MEAL_DATA"));
    if (value) {
      setSavedMeal(value);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("SAVED_MEAL_DATA", JSON.stringify(savedMeal));
  }, [savedMeal]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route
          path="/savedMeals"
          element={
            <SavedMeals savedMeal={savedMeal} setSavedMeal={setSavedMeal} />
          }
        />
        <Route
          path="/mealDetails/:id"
          element={
            <MealDetails setSavedMeal={setSavedMeal} savedMeal={savedMeal} />
          }
        />
      </Routes>
    </div>
  );
}

export default Main;
