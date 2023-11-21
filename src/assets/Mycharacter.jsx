/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF, Html } from "@react-three/drei";
import scenePath from "/memodels/mycharacter.glb";
import { extend } from "@react-three/fiber";
import { geometry } from "maath";

extend(geometry);

export function Me(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF(scenePath);
  const { animations: idleAnimation } = useFBX("animations/StandingIdle.fbx");
  idleAnimation[0].name = "Idling";
  const { actions } = useAnimations(idleAnimation, group);
  useEffect(() => {
    actions["Idling"].reset().play();
  }, []);
  return (
    <group {...props} ref={group} dispose={null}>
      <group>
        <group
          scale={[0.3, 0.3, 0.3]}
          position={[-0.95, -0.85, -0.25]}
          rotation={[1.5, 0, 0]}
        >
          <Annotation>
            Click Me <span style={{ fontSize: "1.5em" }}>🌖</span>
          </Annotation>
        </group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}
function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }
    >
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}

useGLTF.preload(scenePath);
