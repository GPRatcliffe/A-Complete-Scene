import { Canvas } from "react-three-fiber"
import Fox from "./components/fox"

const App = () => {

    return (
        <>
            <div id="canvasContainer">
                <Canvas camera={{ position: [-6, 4, -8] }}>
                    <Fox />
                    <ambientLight color={0xFFFFFF} intensity={0.3} />
                    <spotLight 
                        color="#FFF" 
                        position={[10, 20, 10]}
                        intensity={1}
                    /> 
                </Canvas>
            </div>
        </>
    )
}

export default App