import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Kenyanflag(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/flag.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Flag_Pole"
          castShadow
          receiveShadow
          geometry={nodes.Flag_Pole.geometry}
          material={materials.Shelf}
          position={[-21.612, 5.574, 12.219]}
          scale={0.511}
        />
        <mesh
          name="Flag"
          castShadow
          receiveShadow
          geometry={nodes.Flag.geometry}
          material={materials["Kenyan Flag"]}
          position={[-14.159, 25.03, 12.219]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[7.43, 7.43, 5.622]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/flag.glb");
