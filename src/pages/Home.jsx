import React from "react";
import { useNavigate } from "react-router-dom";
import HomeLogo from "../images/homeImage.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-full flex flex-col lg:py-8 container mx-auto">
      <div className="flex items-center flex-col-reverse lg:flex-row justify-center mt-16">
        {/* Home Description */}
        <div className="md:w-[40%] px-5 md:text-start text-center">
          {/* Description */}
          <h1 className="lg:text-6xl text-center md:text-start text-2xl font-bold text-[#dbcdb5]">
            Find The Perfect{" "}
            <span className="text-[#a4330dd0]">Meal Recipe</span> For You
          </h1>
          <span className="text-[#dbcdb5] md:text-xl">
            a listing website of meal recipe
          </span>
          <div className="flex justify-center md:justify-start items-center gap-5 mt-5">
            <button
              onClick={() => navigate("/meals")}
              className="bg-[#a4330d] text-white p-3 rounded-lg hover:bg-transparent border-2 border-[#a4330d] duration-300"
            >
              Explore Meals
            </button>
            <button
              onClick={() => navigate("/savedMeals")}
              className="bg-[#ed6e3a] text-white p-3 rounded-lg hover:bg-transparent border-2 border-[#ed6e3a] duration-300"
            >
              Saved Meals
            </button>
          </div>
        </div>
        {/* Hero Image */}
        <img
          src={HomeLogo}
          alt="homeLogo"
          className="md:w-[45%] object-fit rounded-lg px-5 mb-5 md:mb-0"
        />
      </div>

      {/* About Website */}
      <div className="flex flex-col w-full mt-32 md:py-20 pb-10 md:px-24 px-5 justify-start gap-2">
        <div className="flex items-center gap-2">
          <h1 className="md:text-4xl text-2xl self-end font-bold text-[#dbcdb5]">
            {" "}
            What is Meals Recipe
          </h1>
        </div>
        <div className="md:w-[60%] md:text-lg text-sm text-gray-300">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            laboriosam necessitatibus impedit. Nesciunt voluptatum, quisquam
            possimus eveniet inventore esse, sed recusandae iusto facere odit
            cupiditate a veniam. Vero enim ipsam nobis tempore? Iure
            perspiciatis cum illo esse, obcaecati repudiandae magnam.Rem
            laboriosam necessitatibus impedit. Nesciunt voluptatum, quisquam
            possimus eveniet inventore esse, sed recusandae iusto facere odit
            cupiditate a veniam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            laboriosam necessitatibus impedit. Nesciunt voluptatum, quisquam
            possimus eveniet inventore esse, sed recusandae iusto facere odit
            cupiditate a veniam. Vero enim ipsam nobis tempore? Iure
            perspiciatis cum illo esse, obcaecati repudiandae magnam.Rem
            laboriosam necessitatibus impedit. Nesciunt voluptatum, quisquam
            possimus eveniet inventore esse, sed recusandae iusto facere odit
            cupiditate a veniam.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
