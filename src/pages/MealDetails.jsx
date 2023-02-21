import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import MealDetailCard from "../components/MealDetail/MealDetailCard";
import { SyncLoader } from "react-spinners";
import MealIngredients from "../components/MealDetail/MealIngredients";
import MealInstructions from "../components/MealDetail/MealInstructions";

function MealDetails(props) {
  const { setSavedMeal, savedMeal } = props;
  const { id } = useParams();

  const fetchMealDetails = async () => {
    const { data } = await axios.get(`/lookup.php?i=${id}`);
    return data.meals;
  };

  const { data, isLoading } = useQuery(["mealDetails", id], fetchMealDetails);

  return (
    <div className="md:container md:mx-auto md:px-40 md:mt-16 mt-8 pb-20">
      <div>
        {data?.map((meal) => (
          <MealDetailCard
            key={meal.idMeal}
            meal={meal}
            setSavedMeal={setSavedMeal}
            savedMeal={savedMeal}
          />
        ))}
      </div>
      <div className="md:mt-40 mt-28">
        <div>
          {data?.map((meal) => (
            <MealIngredients key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>
      <div>
        {data?.map((meal) => (
          <MealInstructions key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <div className="flex items-center justify-center p-10">
        {isLoading && <SyncLoader color="#e9b08e" />}
      </div>
    </div>
  );
}

export default MealDetails;
