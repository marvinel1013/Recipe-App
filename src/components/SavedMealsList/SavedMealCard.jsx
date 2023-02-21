import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import NoImage from "../../images/noimage.jpg";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";

function SavedMealCard({ save }) {
  const fetchSavedMeals = async () => {
    const { data } = await axios.get(`/lookup.php?i=${save}`);
    return data.meals;
  };

  const { data, isLoading } = useQuery(["savedMeal", save], fetchSavedMeals);

  return (
    <Link to={`/mealDetails/${save}`}>
      <div className="bg-[#442b20] w-[300px] rounded-lg p-4 m-5">
        {isLoading ? (
          <div className="flex items-center justify-center">
            <BarLoader color="#e9b08e" height={8} width={200} />
          </div>
        ) : (
          data?.map((meal) => (
            <div key={meal.idMeal} className="flex items-center gap-5">
              <img
                src={meal.strMealThumb || NoImage}
                alt="image"
                className="w-[50%]"
              />
              <div className="font-bold text-lg text-[#ed6e3a]">
                <span>{meal.strMeal}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </Link>
  );
}

export default SavedMealCard;
