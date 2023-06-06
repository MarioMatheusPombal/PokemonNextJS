"use client"
import React, {useEffect, useState} from "react";

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

    useEffect(() => {
        const promises = [];

        for (let i = 1; i <= 151; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            promises.push(fetch(url).then((res) => res.json()));
        }

        Promise.all(promises)
            .then((data) => {
                const newSprites = data.map((item) => item.sprites.front_default);
                setSprites(newSprites);
            })
            .catch((err) => console.error(err));
    }, []);

    return sprites;
}

export default function getSprites() {
    const sprites = useSprites();

    return (
        <div>
            {sprites.map((sprite) => (
                <img key={sprite} src={sprite} alt="Front default sprite" />
            ))}
        </div>
    );
}