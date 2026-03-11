import React from "react";
import { useTransition, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountrySoloData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountrySoloData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      console.log(res.data[0]);
    });
  }, [params.id]);
  if (isPending || !country) return <Loader />;
  return (
    <>
      <section className="card country-details-card container">
        <div className="container-card bg-white-box">
          <div className="country-image grid grid-two-cols">
            <img
              src={country.flags.svg}
              alt={country.flags.alt}
              className="flag"
            />
            <div className="country-content">
              <p className="card-title">{country.name.official}</p>
              <div className="infoContainer">
                <p>
                  <span className="card-description">Native name: </span>
                  {Object.keys(country.name.nativeName)
                    .map((key) => country.name.nativeName[key].common)
                    .join(", ")}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description">Region: </span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description">Sub Region: </span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description">Capital: </span>
                  {country.capital}
                </p>
                <p>
                  <span className="card-description">Top level domain: </span>
                  {country.tld[0]}
                </p>
                <p>
                  <span className="card-description">Currency: </span>
                  {Object.keys(country.currencies)
                    .map(
                      (currentCurrency) =>
                        country.currencies[currentCurrency].name,
                    )
                    .join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className="country-card-backBtn">
            <NavLink className="backBtn" to="/country"><button>Back</button></NavLink>
          </div>
        </div>
      </section>
    </>
  );
};
