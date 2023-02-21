import React from "react";

function Search(props) {
  const { searchText, setSearchText } = props;
  return (
    <div className="flex flex-col gap-5 px-4 md:px-0">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        type="search"
        placeholder="Search for meals..."
        className="p-4 md:w-3/5 rounded-md placeholder:text-lg placeholder:text-[#dbcdb5] text-[#dbcdb5] focus:outline-double outline-2 outline-[#a4330d] text-lg bg-[#7c5441]"
      />
      <span className="text-[#dbcdb5] text-center md:text-start md:text-lg">
        Search meals or select categories from below.
      </span>
    </div>
  );
}

export default Search;
