import React from "react";
import { SyncLoader } from "react-spinners";
import MealCard from "./MealCard";

function MealListing({
  data,
  isLoading,
  mealSearch,
  searchText,
  searchLoading,
}) {
  return (
    <div className="md:mt-8 mt-5">
      {searchText === "" ? (
        <div className="flex justify-center">
          {isLoading ? (
            <div>
              <SyncLoader color="#e9b08e" />
            </div>
          ) : (
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {data &&
                data.map((meal) => <MealCard key={meal.idMeal} meal={meal} />)}
            </div>
          )}
        </div>
      ) : (
        <div>
          {searchText === "" ? null : (
            <div>
              {searchLoading ? (
                <div className="flex justify-center">
                  <SyncLoader color="#e9b08e" />
                </div>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {mealSearch &&
                    mealSearch.meals?.map((meal) => (
                      <MealCard key={meal.idMeal} meal={meal} />
                    ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div>
        {mealSearch?.meals === null ? (
          <h1 className="text-[#e9b08e] text-xl">No Meals Found!</h1>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MealListing;
