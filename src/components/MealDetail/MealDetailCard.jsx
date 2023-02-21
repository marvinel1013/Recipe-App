import React from "react";
import NoImage from "../../images/noimage.jpg";
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import { toast } from "react-hot-toast";

function MealDetailCard(props) {
  const { meal, setSavedMeal, savedMeal } = props;
  const image = meal.strMealThumb || NoImage;
  const tags = meal?.strTags?.split(",").join(", ") || "No Tags Available";

  //Saved Meal Function
  const handleSavedMeal = () => {
    setSavedMeal([...savedMeal, meal.idMeal]);
    toast.success("Meal saved Successfully🙂");
  };

  //Remove Saved Meal Function
  const handleRemoveSavedMeal = (id) => {
    setSavedMeal((prevMeal) => prevMeal.filter((meal) => meal !== id));
    toast.error("Meal Removed Successfully😔");
  };

  return (
    <div className=" container mx-auto flex items-center justify-center md:justify-start p-4">
      <div className="flex md:flex-row flex-col items-center gap-8 md:gap-20">
        <img src={image} alt="image" className="md:w-80 w-72 rounded-md" />
        <div>
          <span className="md:text-4xl text-xl font-bold text-[#ed6e3a]">
            {meal.strMeal}
          </span>
          <ul className=" marker:text-[#a4330d] marker:text-3xl list-disc ml-7 list-outside">
            <li>
              <span className="text-lg font-bold text-[#e9b08e]">
                Category:
              </span>
              <span className="text-lg text-[#dbcdb5]">
                {" "}
                {meal.strCategory}
              </span>
            </li>
            <li>
              <span className="text-lg font-bold text-[#e9b08e]">Area:</span>
              <span className="text-lg text-[#dbcdb5]"> {meal.strArea}</span>
            </li>
            <li>
              <span className="text-lg font-bold text-[#e9b08e]">Tags:</span>
              <span className="text-lg text-[#dbcdb5]"> {tags}</span>
            </li>
          </ul>

          {savedMeal.includes(meal.idMeal) ? (
            <div>
              <h1 className="text-[#6c9e4f] md:text-xl font-bold mt-5">
                You already saved the meal.
              </h1>
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => handleRemoveSavedMeal(meal.idMeal)}
                  className="flex items-center gap-2 bg-[#a4330d] text-[#dbcdb5] p-3 px-6 rounded-lg mt-6"
                >
                  <FaHeartBroken size={20} />{" "}
                  <span className="md:text-lg font-bold">Remove</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center md:justify-start">
              <button
                onClick={handleSavedMeal}
                className="flex items-center gap-2 bg-[#a4330d] text-[#dbcdb5] p-3 px-6 rounded-lg mt-6"
              >
                <FaHeart size={20} />{" "}
                <span className="md:text-lg font-bold">Save</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MealDetailCard;

// const value = {
//   id: meal.idMeal,
//   image: meal.strMealThumb,
//   meal: meal.strMeal,
//   category: meal.strCategory,
// };
// const saveValue = [...savedMeal, value];
// setSavedMeal(saveValue);
