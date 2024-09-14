'use client'
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const NavSearch = () => {
    const [query, setQuery] = useState<string>("");

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
  
      setQuery(e.target.value);
  
      setTimeout(() => {
        console.log("Delayed query update:", e.target.value);
      }, 3000);
    };
  return (
    <div className="p-6 w-full">
      <div className="flex justify-between items-center w-full border-[1px] border-[#294693] rounded">
        <input
          type="text"
          value={query}
          placeholder="Search"
          onChange={handleQueryChange}
          className="text-black p-3 w-full rounded focus:outline-none"
        />
        <button>
          <CiSearch className="text-3xl mr-3" />
        </button>
      </div>
    </div>
  );
};

export default NavSearch;