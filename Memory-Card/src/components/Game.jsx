import { useState, useEffect } from "react";
import Card from "./Card";
export default function Game() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const initialArray = [
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];
  const [array, setArray] = useState(initialArray);

  useEffect(() => {
    const fetchData = async () => {
      let newArray = await Promise.all(
        initialArray.map(async (poki) => {
          let apiCall = `https://pokeapi.co/api/v2/pokemon/${poki}/`;
          const res = await fetch(apiCall);
          const data = await res.json();

          return {
            id: poki,
            image: data.sprites.front_default,
            name: data.name,
          };
        })
      );

      setArray(newArray);
    };

    fetchData();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-12">
      {array.map((pokiObj) => {
        return (
          <Card
            key={pokiObj.id}
            name={pokiObj.name}
            image={pokiObj.image}
            onClick={() => console.log(pokiObj.id)}
          />
        );
      })}
    </div>
  );
}
