'use client'
import {useEffect, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from "next/link";
import './CarouselPokemon.css';


function useSpritesGen1() {
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
function useSpritesGen2() {
    const [sprites2, setSprites2] = useState([]);
    const nameAndSprite = [];

    useEffect(() => {
        const promises = [];

        for (let i = 152; i <= 251; i++) {
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
                setSprites2(newNamesAndSprites);
            })
            .catch((err) => console.error(err));
    }, []);

    return sprites2;
}
function useSpritesGen3() {
    const [sprites3, setSprites3] = useState([]);
    const nameAndSprite = [];

    useEffect(() => {
        const promises = [];

        for (let i = 252; i <= 386; i++) {
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
                setSprites3(newNamesAndSprites);
            })
            .catch((err) => console.error(err));
    }, []);

    return sprites3;
}


function ControlledCarousel() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [index3, setIndex3] = useState(0);

    const handleSelect1 = (selectedIndex) => {
        setIndex1(selectedIndex);
    };
    const handleSelect2 = (selectedIndex) => {
        setIndex2(selectedIndex);
    };
    const handleSelect3 = (selectedIndex) => {
        setIndex3(selectedIndex);
    };

    const sprites = useSpritesGen1();
    const sprites2 = useSpritesGen2();
    const sprites3 = useSpritesGen3();
    let number = 0

    return (
        <div>
            <div className={'centerdiv'}><h2 className={'h2'}>Gen 1</h2></div>
            <Carousel activeIndex={index1} onSelect={handleSelect1} className={'Carousel'}>
                {sprites.map((sprite) => (
                    <Carousel.Item key={sprite.name}>
                        <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <img
                                src={sprite.sprite}
                                alt={sprite.name}
                            />
                            <h3>{(sprite.name).toUpperCase()}</h3>
                            <p className={'p'}>{++number}</p>
                            <div>
                                <button className={'button'}>
                                    <Link href={`/pokemon/${number}`} className={'link'}>Ver mais</Link>
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={'centerdiv'}><h2 className={'h2'}>Gen 2</h2></div>
            <Carousel activeIndex={index2} onSelect={handleSelect2} className={'Carousel'}>
                {sprites2.map((sprite) => (
                    <Carousel.Item key={sprite.name}>
                        <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <img
                                src={sprite.sprite}
                                alt={sprite.name}
                            />
                            <h3>{(sprite.name).toUpperCase()}</h3>
                            <p className={'p'}>{++number}</p>
                            <div>
                                <button className={'button'}>
                                    <Link href={`/pokemon/${number}`} className={'link'}>Ver mais</Link>
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className={'centerdiv'}><h2 className={'h2'}>Gen 3</h2></div>
            <Carousel activeIndex={index3} onSelect={handleSelect3} className={'Carousel'}>
                {sprites3.map((sprite) => (
                    <Carousel.Item key={sprite.name}>
                        <div className={'d-flex flex-column justify-content-center align-items-center'}>
                            <img
                                src={sprite.sprite}
                                alt={sprite.name}
                            />
                            <h3>{(sprite.name).toUpperCase()}</h3>
                            <p className={'p'}>{++number}</p>
                            <div>
                                <button className={'button'}>
                                    <Link href={`/pokemon/${number}`} className={'link'}>Ver mais</Link>
                                </button>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>

    );
}

export default ControlledCarousel;