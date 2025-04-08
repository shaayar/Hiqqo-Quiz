import React, { useState, useContext } from "react";
import { DataProvider } from "../../App";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { page } = useContext(DataProvider);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    switch (page) {
      case "my-library":
        console.log("Searching quizzes for:", searchQuery);
        break;
      case "reports":
        console.log("Searching reports for:", searchQuery);
        break;
      default:
        console.log("Searching for:", searchQuery);
    }
  };

  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder={
            page === "my-library"
              ? "Search quizzes..."
              : page === "reports"
              ? "Search reports..."
              : "Search..."
          }
          className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 btn bg-indigo-600 text-white rounded-md"
        >
          Search 
        </button>
      </form>
    </div>
  );
};

export default SearchBar;