import { createContext, useContext, useEffect, useState } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(
    JSON.parse(localStorage.getItem("selectedCity")) || {
      id: 55,
      name: "Samsun",
      latitude: "41.2928",
      longitude: "36.3313",
      population: 1279884,
      region: "Karadeniz",
    }
  );

  useEffect(() => {
    localStorage.setItem("selectedCity", JSON.stringify(selectedCity));
  }, [selectedCity]);

  const values = {
    selectedCity,
    setSelectedCity,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
