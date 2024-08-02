import { useState, useEffect } from "react";
import Card from "./Card";
import shuffleArray from "./shuffleArray";
import Header from "./Header";
import Footer from "./Footer";
export default function Game() {
  const initialArray = [
    "101",
    "38",
    "40",
    "70",
    "78",
    "81",
    "90",
    "93",
    "54",
    "76",
    "61",
    "50",
  ];
  const [array, setArray] = useState(initialArray);
  const [previousChoices, setPreviousChoices] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      let newArray = await Promise.all(
        array.map(async (poki) => {
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
  const onClick = (id) => {
    if (!previousChoices.includes(id)) {
      setPreviousChoices([...previousChoices, id]);
      setCurrentScore((current) => {
        current++;
        if (current > bestScore) {
          setBestScore(current);
        }
        return current;
      });

      setArray((arr) => {
        const shuffeld = shuffleArray(arr);
        return shuffeld;
      });
    } else {
      setCurrentScore(0);
      setArray((arr) => {
        const shuffeld = shuffleArray(arr);
        return shuffeld;
      });
      setPreviousChoices([]);
    }
  };
  return (
    <div>
      <Header currentScore={currentScore} bestScore={bestScore} />
      <div className="flex flex-col items-center flex-wrap p-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 py-12 ">
          {array.map((pokiObj) => {
            return (
              <Card
                key={pokiObj.id}
                name={pokiObj.name}
                image={pokiObj.image}
                id={pokiObj.id}
                onClick={onClick}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
