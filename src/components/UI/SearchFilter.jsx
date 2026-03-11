import React from "react";

export const SearchFilter = ({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    if (value === "asc") {
      const ascSort = [...countries].sort((a, b) =>
        a.name.common.localeCompare(b.name.common),
      );
      setCountries(ascSort);
    } else {
      const descSort = [...countries].sort((a, b) =>
        b.name.common.localeCompare(a.name.common),
      );
      setCountries(descSort);
    }
  };

  return (
    <section className="section-searchFilter container">
      <input
        type="text"
        className="search-input"
        placeholder="search"
        value={search}
        onChange={handleInputChange}
      />

      <div>
        <button onClick={() => sortCountries("asc")}>Asc</button>
      </div>
      <div>
        <button onClick={() => sortCountries("desc")}>Desc</button>
      </div>

      <div>
        <select className="select-section" onChange={handleSelectChange}>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
