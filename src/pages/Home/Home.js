import React, { useState, useEffect } from "react";
import { NavBar } from "../../components/NavBar";
import axios from "axios";

export function Home() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Pokemon</h1>
      <ul>
        {pokemon.map((poke) => {
          return <li>{poke.name}</li>;
        })}
      </ul>
    </div>
  );
}
