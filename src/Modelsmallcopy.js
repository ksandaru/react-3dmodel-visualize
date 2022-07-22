//"Railway" (https://skfb.ly/6WVHF)
// by
// Mike Polyakovich is licensed under
// Creative Commons Attribution
// (http://creativecommons.org/licenses/by/4.0/).
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, {useEffect, useRef, useState} from 'react'
import {Html, OrbitControls, useGLTF} from '@react-three/drei'
import {TextureLoader} from 'three/src/loaders/TextureLoader';
import {useFrame, useLoader} from "@react-three/fiber";
import {proxy, useSnapshot} from 'valtio';

const state = proxy({
    current: null,
    items: {
        location1: "#ff3",
        location2: "#3f3",
        location3: "#3f3",
    },
})


export default function Modelsmallcopy({...props}) {
    const group = useRef()
    const myGroup = useRef()
    const {nodes, materials} = useGLTF('/RailwaysmallCopy/1-untitled.glb')
    const snap = useSnapshot(state)
    useFrame((state, delta) => (group.current.rotation.y += 0.05))

    const [color, setColor] = useState(snap.current)

    return (
        <>
                <group ref={myGroup} {...props} dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <group position={[178.88, -12.81, 0]}>
                                <mesh geometry={nodes.m_Railway_mt_Railway_0.geometry} material={materials.mt_Railway}/>
                            </group>
                        </group>
                    </group>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_5.geometry} material={materials.white}/>
                    </group>
                    <group rotation={[-Math.PI / 2, 0, 0]}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <group position={[178.88, -12.81, 0]}>
                                <mesh geometry={nodes.m_Railway_mt_Railway_0001.geometry}
                                      material={materials['mt_Railway.001']}/>
                            </group>
                        </group>
                    </group>

                    //1st location - geo tag 1
                    <group position={[-1.85, 34.45, 172.83]} rotation={[-Math.PI / 2, 0, 0]} scale={20} >
                        <group ref={group} rotation={[Math.PI / 2, 0, 0]}  >
                            <mesh  geometry={nodes.Object_4.geometry}
                                  material-color={color}
                                  material={materials['material.003']}
                                   onClick={()=>{ setColor(snap.items.location2)}}
                            />

                            <mesh geometry={nodes.Object_5001.geometry} material={materials['white.001']}/>
                        </group>
                    </group>
                    //2nd location - geo tag 2
                    <group position={[176.89, 34.45, 172.83]} rotation={[-Math.PI / 2, 0, 0]} scale={20} >
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Object_4001.geometry} material={materials['material.004']} material-color={snap.items.location2}/>
                            <mesh geometry={nodes.Object_5002.geometry} material={materials['white.002']}/>
                        </group>
                    </group>

                    //3rd location - geo tag 3
                    <group position={[355.94, 34.45, 172.83]} rotation={[-Math.PI / 2, 0, 0]} scale={20} >
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Object_4002.geometry} material={materials['material.005']} />
                            <mesh geometry={nodes.Object_5003.geometry} material={materials['white.003']}/>
                        </group>
                    </group>

                    //4th location - geo tag 4
                    <group position={[355.94, 34.45, -171.96]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Object_4003.geometry} material={materials['material.006']}/>
                            <mesh geometry={nodes.Object_5004.geometry} material={materials['white.004']}/>
                        </group>
                    </group>

                    // location 5
                    <group position={[176.87, 34.45, -172.14]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Object_4014.geometry} material={materials['material.017']}/>
                            <mesh geometry={nodes.Object_5015.geometry} material={materials['white.015']}/>
                        </group>
                    </group>

                    //location 6
                    <group position={[-1.57, 34.45, -172.14]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                        <group rotation={[Math.PI / 2, 0, 0]}>
                            <mesh geometry={nodes.Object_4015.geometry} material={materials['material.018']}/>
                            <mesh geometry={nodes.Object_5016.geometry} material={materials['white.016']}/>
                        </group>
                    </group>
                    <mesh geometry={nodes.Cube.geometry} material={materials.Material}/>
                </group>

                //1.1 location
                <group position={[366, 34.45, 100.22]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4004.geometry} material={materials['material.007']}/>
                        <mesh geometry={nodes.Object_5005.geometry} material={materials['white.005']}/>
                    </group>
                </group>
                //1.2 location
                <group position={[186.87, 34.5, 99.86]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4013.geometry} material={materials['material.016']}/>
                        <mesh geometry={nodes.Object_5014.geometry} material={materials['white.014']}/>
                    </group>
                </group>
                //1.3 location
                <group position={[8, 35.45, 99.86]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4012.geometry} material={materials['material.015']}/>
                        <mesh geometry={nodes.Object_5013.geometry} material={materials['white.013']}/>
                    </group>
                </group>
                //2.1 location
                <group position={[365.94, 34.45, -119.35]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4005.geometry} material={materials['material.008']}/>
                        <mesh geometry={nodes.Object_5006.geometry} material={materials['white.006']}/>
                    </group>
                </group>


                //2.2 location
                <group position={[186.92, 34.45, -119.35]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4010.geometry} material={materials['material.013']}/>
                        <mesh geometry={nodes.Object_5011.geometry} material={materials['white.011']}/>
                    </group>
                </group>

                //2.3 location
                <group position={[8, 34.45, -119.35]} rotation={[-Math.PI / 2, 0, 0]} scale={20}>
                    <group rotation={[Math.PI / 2, 0, 0]}>
                        <mesh geometry={nodes.Object_4011.geometry} material={materials['material.014']}/>
                        <mesh geometry={nodes.Object_5012.geometry} material={materials['white.012']}/>
                    </group>
                </group>
        </>


    )
}
