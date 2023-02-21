import React from "react";

function MealIngredients({ meal }) {
  const ingredients = Object.keys(meal)
    .filter((key) => key.startsWith("strIngredient"))
    .filter((key) => meal[key] !== "" && meal[key] !== null);

  const ingredientAndMeasure = ingredients.map((value, index) => ({
    index: index + 1,
    ingredient: meal[value],
    measure: meal[`strMeasure${index + 1}`],
  }));

  return (
    <div>
      <h2 className="text-[#ed6e3a] md:text-4xl text-2xl px-5 md:px-2 underline font-bold mb-5">
        Ingredients
      </h2>
      <div className="flex justify-between px-4 md:px-0">
        <table className="md:w-[50%] w-full rounded-md overflow-hidden">
          <tbody>
            {ingredientAndMeasure.map((value) => (
              <tr
                key={value.index}
                className="bg-[#a4330d8c] even:bg-[#ed6d3a81] hover:bg-[#5e3625]"
              >
                <td className="flex justify-between text-sm md:text-lg p-2 md:px-5 text-[#e9b08e]">
                  <span>{value.ingredient}</span>
                  <span>{value.measure}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MealIngredients;
