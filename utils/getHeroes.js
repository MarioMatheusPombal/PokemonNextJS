"use client";
import React, {useState} from "react";

const baseURL = "https://pokeapi.co/api/v2/pokemon?limit=151";
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

function getPokemon() {
    const [pokemon, setPokemon] = useState([]);

    fetch(baseURL, options)
        .then((res) => res.json())
        .then((res) => setPokemon(res.results))
        .catch((err) => console.error(err));

    return pokemon;
}

export default function getHeroes() {

    return (
        <div>
            <ul>
                {getPokemon().map((pokemon) => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}
