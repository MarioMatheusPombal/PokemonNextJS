'use client'
import '../../pokemon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import Link from "next/link";
import PaginationPokeList from "@/utils/Pagination";

export default function Page({params}) {
    const [pokemon, setPokemon] = useState(null);
    const finalUrl = `https://pokeapi.co/api/v2/pokemon/`;
    const offset = params.id;
    const posmax = offset * 20;
    const start = posmax - 19;

    useEffect(() => {
        const promises = [];

        for (let i = start; i <= posmax; i++) {
            const url = `${finalUrl}${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }

        Promise.all(promises)
            .then((data) => {
                const newSprites = data.map((item) => item.sprites.front_default);
                const newNamesAndSprites = data.map((item) => {
                    return {
                        name: item.name,
                        sprite: item.sprites.front_default
                    }
                });
                setPokemon(newNamesAndSprites);
            })
            .catch((err) => console.error(err));
    }, []);

    let number = start - 1;

    return (
        <div>
            <div className={'pokemons'}>
                {pokemon && pokemon.map((sprite) => (
                    <div key={sprite.name} className={'cardpokemon'}>
                        <p className={'p'}>{++number}</p>
                        <img src={sprite.sprite} alt={sprite.name} className={'img'}/>
                        <p className={'pname'}>{(sprite.name).toUpperCase()}</p>
                        <div className={'divcenter'}>
                            <button className={'button'}>
                                <Link href={`/pokemon/${number}`} className={'link'}>Ver mais</Link>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className={'centeritems'}>
                <PaginationPokeList number={params.id}/>
            </div>
        </div>
    );


}