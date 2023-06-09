import ContainerFluidExample from "@/utils/Card";
import './globals.scss';

export default function Home() {
    return (
        <section>
            <div className={'page'}>
                <div>
                    <h1>Pokédex</h1>
                </div>
                <div>
                    <ContainerFluidExample/>
                </div>
            </div>
        </section>
    )
}
