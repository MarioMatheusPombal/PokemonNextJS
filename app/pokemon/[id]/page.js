"use client"
import {useEffect, useState} from "react";
import '../../globals.scss';

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
        <div className={'page'}>
            <div className={'pagelist'}>
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.sprites.front_default} alt={pokemon?.name} className={'img'}/>
                <div className={'stats'}>
                    <h2>Stats</h2>
                    <ul className={'ul'}>
                        {pokemon?.stats.map((stat) => (
                            <li key={stat.stat.name} className={'p'}>
                                {stat.stat.name}: {stat.base_stat}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'abilities'}>
                    <h2>Abilities</h2>
                    <ul className={'ul'}>
                        {pokemon?.abilities.map((ability) => (
                            <li key={ability.ability.name} className={'p'}>{ability.ability.name}</li>
                        ))}
                    </ul>
                </div>
                <div className={'moves'}>
                    <h2>Moves</h2>
                    <ul className={'ul'}>
                        {pokemon?.moves.map((move) => (
                            <li key={move.move.name} className={'p'}>{move.move.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
