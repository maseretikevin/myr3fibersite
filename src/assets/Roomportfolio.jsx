/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/roomportfolio-transformed.glb 
*/

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export function House(props) {
  const { nodes, materials } = useGLTF("/roomportfolio-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={(1, 1, 1)}>
        <mesh
          geometry={nodes.Corner_bulge.geometry}
          material={materials["Kenyan Flag"]}
        />
        <mesh
          geometry={nodes.Hat.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.Bin.geometry}
          material={materials.PaletteMaterial002}
        />
        <mesh
          geometry={nodes.Sofa.geometry}
          material={materials.PaletteMaterial004}
        />
        <mesh
          geometry={nodes.Coffee.geometry}
          material={materials.PaletteMaterial005}
        />
        <mesh
          geometry={nodes.Phone.geometry}
          material={materials.PaletteMaterial006}
        />
        <mesh
          geometry={nodes.Office_chair.geometry}
          material={materials["10239_Office_Chair_v1"]}
        />
        <mesh geometry={nodes.wall_shelf.geometry} material={materials.Shelf} />
        <mesh geometry={nodes.tv.geometry} material={materials["tv screen"]} />
        <mesh geometry={nodes.Floor.geometry} material={materials.T} />
        <mesh geometry={nodes.Ground.geometry} material={materials.Ground} />
        <group
          position={[-23.739, 38.298, 3.625]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[1, 1, 1.148]}
        >
          <mesh
            geometry={nodes.Cube004.geometry}
            material={materials["Picture.001"]}
          />
          <mesh
            geometry={nodes.Cube004_1.geometry}
            material={materials["Pic image"]}
          />
        </group>
        <mesh
          geometry={nodes.Table_Top.geometry}
          material={materials["Table top"]}
        />
        <mesh
          geometry={nodes.Table_Leg.geometry}
          material={materials.PaletteMaterial007}
        />
        <mesh
          geometry={nodes.Third.geometry}
          material={materials["Wall Art"]}
        />
        <mesh geometry={nodes.Picture.geometry} material={materials.Picture} />
        <mesh geometry={nodes.Dirt.geometry} material={materials.sand} />
        <mesh
          geometry={nodes.Leaf000.geometry}
          material={materials["leaf.001"]}
        />
        <mesh geometry={nodes.Moh.geometry} material={materials.moh} />
        <mesh geometry={nodes.stem.geometry} material={materials.stem} />
        <mesh
          geometry={nodes.Center_Table.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          geometry={nodes.Center_Table_1.geometry}
          material={materials["Table Drawer"]}
        />
        <mesh geometry={nodes.Cube003.geometry} material={materials.Carpet} />
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.wall} />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials["Wooden Floor"]}
        />
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={nodes.Cube_1.material}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/roomportfolio-transformed.glb");
