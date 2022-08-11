import {Suspense, useEffect, useRef} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
import Modelsmallcopy from "../Modelsmallcopy";


const Railway = () => {
    return (
        <>
            <div className="wrapper">
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight/>
                        <spotLight intensity={0.8} angle={0.1} penumbra={1} position={[10, 15, 10]}/>
                        <pointLight intensity={0.8} position={[2, 2, 2]}/>
                        <Modelsmallcopy position={[10, 0, -10]}/>
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                    </Suspense>
                </Canvas>
            </div>
        </>
    )
}
export default Railway;