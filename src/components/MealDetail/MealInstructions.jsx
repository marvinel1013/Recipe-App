import React from "react";

function MealInstructions({ meal }) {
  return (
    <div className="md:mt-20 mt-16">
      <h1 className="text-[#ed6e3a] md:text-4xl text-2xl px-5 md:px-0 underline font-bold mb-5">
        Instructions
      </h1>

      <div className="md:w-[80%] md:px-5 px-10">
        {meal?.strInstructions
          .split(".")
          .filter((d) => d !== "")
          .map((instr, index) => (
            <ul
              key={index}
              className="list-disc marker:text-[#a4330d] marker:text-xl md:marker:text-3xl"
            >
              <li className="text-[#e9b08e] md:text-lg">{instr}.</li>
            </ul>
          ))}
      </div>
    </div>
  );
}

export default MealInstructions;
