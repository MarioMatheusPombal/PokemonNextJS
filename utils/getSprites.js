"use client"
import React, {useEffect, useState} from "react";
import {redirect} from "next/navigation";
import './getSprites.scss';
import Link from "next/link";

const num = 151;
const baseURL = `https://pokeapi.co/api/v2/pokemon/${num}`;
const options = {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    }
}


function useSprites() {
    const [sprites, setSprites] = useState([]);
    const nameAndSprite = [];

    useEffect(() => {
        const promises = [];

        for (let i = 1; i <= 151; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
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
                setSprites(newNamesAndSprites);
            })
            .catch((err) => console.error(err));
    }, []);

    return sprites;
}


export default function getSprites() {
    const sprites = useSprites();
    let number = 0;

    return (
        <div className={'pokemons'}>
            {sprites.map((sprite) => (
                <div key={sprite.name} className={'cardpokemon'}>
                    {number++}
                    <img src={sprite.sprite} alt={sprite.name} className={'img'}/>
                    <p className={'p'}>{sprite.name}</p>
                    <button className={'button'}>
                        <Link href={`/pokemon/${number}`}>Ver mais</Link>
                    </button>
                </div>
            ))}
        </div>
    );
}