import React, { useEffect, useState } from "react";
import { getRegion } from "../../utils/api";

const SortByCountry = ({ country, handleCountry }) => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const results = await getRegion();
        setCountries(results);
      } catch (error) {
        console.log("There's an error while fetching data:", error);
      }
    };

    fetchCountries();
  }, []);

  const onCountryChange = (event) => {
    const selectedCountry = event.target.value;
    handleCountry(selectedCountry);
  };

  const filteredCountries = countries.filter((country) =>
    country.english_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <p className="text-lg font-bold p-2">Origin Country</p>
      <input
        type="text"
        placeholder="Search countries..."
        className="w-full bg-slate-100 p-2 rounded-lg text-sm outline-none mb-2"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="w-full bg-slate-100 p-2 rounded-lg text-sm outline-none truncate"
        onChange={onCountryChange}
        value={country}
      >
        <option value="">Select a country</option>
        {filteredCountries.map((country) => (
          <option key={country.iso_3166_1} value={country.iso_3166_1}>
            {country.english_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortByCountry;
