import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export const CountryCard = ({ country }) => {
  const { name, flags, population, region, capital } = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.svg} />
        <div className="country-info">
          <p className="card-title">
            {name.common.length < 12
              ? name.common
              : name.common.slice(0, 12) + "..."}
          </p>
          <p>
            <span className="card-description">Population: </span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region: </span> {region}
          </p>
          <p>
            <span className="card-description">Capital: </span>
            {capital[0]}
          </p>
          <NavLink to={`/country/${name.common}`}>
            <button>Read More<FaLongArrowAltRight/></button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
