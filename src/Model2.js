/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef } from "react";
// import { useGLTFLoader } from "@react-three/drei/loaders/useGLTFLoader";
import { useGLTF } from "@react-three/drei";

export default function Model2(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shoe_draco.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[32.02, 1174.28, 0.27]} scale={[0.19, 0.01, 0.01]}>
            <mesh
              geometry={nodes.Energy_Energy_0.geometry}
              material={materials.Energy}
            />
          </group>
          <group position={[-15.42, 1105.48, 0]}>
            <mesh
              geometry={nodes.Tower005_Tower_color02_0.geometry}
              material={materials.Tower_color02}
            />
          </group>
          <group
            position={[1.38, 1109.5, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs005_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group
            position={[1.38, 909.38, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs004_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group position={[-15.42, 905.35, 0]}>
            <mesh
              geometry={nodes.Tower004_Tower_color01_0.geometry}
              material={materials.Tower_color01}
            />
          </group>
          <group position={[-15.42, 705.19, 0]}>
            <mesh
              geometry={nodes.Tower003_Tower_color02_0.geometry}
              material={materials.Tower_color02}
            />
          </group>
          <group
            position={[1.38, 709.21, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs003_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group
            position={[1.38, 509, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs002_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group position={[-15.42, 504.97, 0]}>
            <mesh
              geometry={nodes.Tower002_Tower_color01_0.geometry}
              material={materials.Tower_color01}
            />
          </group>
          <group position={[-15.42, 304.92, 0]}>
            <mesh
              geometry={nodes.Tower001_Tower_color02_0.geometry}
              material={materials.Tower_color02}
            />
          </group>
          <group
            position={[1.38, 308.95, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs001_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group
            position={[1.38, 108.99, 21.36]}
            rotation={[Math.PI, -0.46, 0]}
            scale={[-0.02, 0.02, 0.02]}
          >
            <mesh
              geometry={nodes.Stairs_Stairs_0.geometry}
              material={materials.Stairs}
            />
          </group>
          <group
            position={[-52.07, 1141.63, 55.58]}
            rotation={[-Math.PI, -0.9, 3.06]}
            scale={0.14}
          >
            <mesh
              geometry={nodes.Sectorial002_Sectorial_0.geometry}
              material={materials.Sectorial}
            />
          </group>
          <group
            position={[-53.61, 1141.63, -52.69]}
            rotation={[Math.PI, 0.76, 3.06]}
            scale={0.14}
          >
            <mesh
              geometry={nodes.Sectorial001_Sectorial_0.geometry}
              material={materials.Sectorial}
            />
          </group>
          <group
            position={[57.73, 1141.63, -0.09]}
            rotation={[0, 0, -0.08]}
            scale={0.14}
          >
            <mesh
              geometry={nodes.Sectorial_Sectorial_0.geometry}
              material={materials.Sectorial}
            />
          </group>
          <group position={[-15.42, 104.96, 0]}>
            <mesh
              geometry={nodes.Floor__0.geometry}
              material={materials.Floor__0}
            />
          </group>
          <group position={[-15.42, 104.96, 0]}>
            <mesh
              geometry={nodes.Tower_Tower_color01_0.geometry}
              material={materials.Tower_color01}
            />
          </group>
          <group position={[-43.33, 17.24, 41.08]}>
            <mesh
              geometry={nodes.Base_Base_0.geometry}
              material={materials.Base}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
