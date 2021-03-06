import cities from "../data/cities.json";
import { useCity } from "../context/CityContext";

function Header() {
  const { selectedCity, setSelectedCity } = useCity();

  const handleChange = (e) => {
    setSelectedCity(
      cities.filter((city) => {
        return city.name === e.target.value;
      })[0]
    );
  };

  return (
    <header>
      <select
        onChange={handleChange}
        name="cities"
        id="cities"
        defaultValue={selectedCity.name}
      >
        {cities.map((city) => {
          return (
            <option key={city.id} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
    </header>
  );
}

export default Header;
