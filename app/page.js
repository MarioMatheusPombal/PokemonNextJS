import GetSprites from '../utils/getSprites'
import globals from "./globals.scss";
import Card from "@/utils/Card";
import ContainerFluidExample from "@/utils/Card";

export default function Home() {
    return (
        <section>
            <div className={'page'}>
                <div>
                    <h1>Pokédex</h1>
                </div>
                <div>
                    <ContainerFluidExample />
                </div>
            </div>
        </section>
    )
}
