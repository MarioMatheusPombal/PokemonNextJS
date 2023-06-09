"use client"
import {useEffect, useState} from "react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export default function Page({params}) {
    const [pokemon, setPokemon] = useState(null);
    const finalUrl = `${baseUrl}/${params.id}`;

    useEffect(() => {
        fetch(finalUrl)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data);
            })
            .catch((err) => console.error(err));
    });


    return (
        <div>
            <h1>{pokemon?.name}</h1>
            <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
        </div>
    )
}
