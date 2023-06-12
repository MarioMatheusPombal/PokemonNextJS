import ContainerFluidExample from "@/utils/Card";
import './globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPokemon from "@/utils/Pokemon/CarouselPokemon";
import './font.css'

export default function Home() {
    return (
        <section>
            <div className={'page'}>
                <div>
                    <h1 className={'pagetitle'}>Pokédex</h1>
                </div>
                <div className={'carousel'}>
                    <CarouselPokemon/>
                </div>
            </div>
        </section>
    )
}
