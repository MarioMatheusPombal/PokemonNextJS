import GetHeroes from '../utils/getHeroes'
import GetSprites from '../utils/getSprites'

export default function Home() {
    return (
        <h1>
            <GetHeroes/>
            <GetSprites/>
        </h1>
    )
}
