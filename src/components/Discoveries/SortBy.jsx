import React from "react";

const SortBy = ({ handleSortBy, sortBy }) => {
  return (
    <div className="w-full shadow-lg px-4 py-2 flex truncate justify-between border mb-8">
      <p className="text-lg font-bold p-2">Sort by</p>
      <select
        className="w-48 bg-slate-50 px-3 rounded-lg text-sm outline-none truncate"
        onChange={handleSortBy}
        value={sortBy}
      >
        <option value="popularity.asc">Popularity Ascending</option>
        <option value="popularity.desc">Popularity Descending</option>
        <option value="vote_average.asc">Rating Ascending</option>
        <option value="vote_average.desc">Rating Descending</option>
        <option value="original_name.asc">Name A - Z</option>
        <option value="original_name.desc">Name Z - A</option>
      </select>
    </div>
  );
};

export default SortBy;
