import React, { useEffect, useState } from "react";
import getAllPokemons from "../services/api";
import "./Cards.css"

function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCards = async () => {
      setLoading(true);
      const data = await getAllPokemons();
      setCards(data);
      console.log(data);
      setLoading(false);
    };
    getCards();
  }, []);

  return (
    <div>
      {loading
        ? "carregando.."
        : cards.map((a) => (
            <div className="poke-card" key={a.id}>
              <h5>{a.name}</h5>
              <img src={a.sprites.other.home.front_default} alt="" />
              <div className="attack">Attack: {a.base_experience}</div>
            </div>
          ))}
    </div>
  );
}

export default Cards;
