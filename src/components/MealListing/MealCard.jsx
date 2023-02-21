import React from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import NoImage from "../../images/noimage.jpg";

function MealCard(props) {
  const { meal } = props;

  const image = meal.strMealThumb || NoImage;
  return (
    <Link to={`/mealDetails/${meal.idMeal}`}>
      <div
        onClick={() => window.scroll(0, 0)}
        className="flex flex-col items-center cursor-pointer w-[320px] h-[285px] md:h-[300px] rounded-md bg-[#442b20] p-4"
      >
        <img
          src={image}
          alt="image"
          className="w-full object-fit mb-3 rounded-md h-[200px]"
        />
        <span className="text-[#e9b08e] md:text-xl">{meal.strMeal}</span>
      </div>
    </Link>
  );
}

export default MealCard;
