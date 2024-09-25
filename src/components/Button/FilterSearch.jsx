import React from 'react'

const FilterSearch = ({handleSearch}) => {
  return (
    <div >
      <button className="w-full mt-2 bg-blue-500 text-white py-2 rounded-md" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default FilterSearch
