import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Fox({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/assets/fox.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[0.11, 1.79, 0]}
        rotation={[-0.03, 0, 0]}
        scale={[0.35, 0.35, 0.27]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials["Orange.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["White.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/fox.glb");