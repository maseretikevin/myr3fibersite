import { Suspense, useEffect, useState } from "react";
import { Html, Preload, useAnimations, useGLTF } from "@react-three/drei";
import scenePath from "/memodels/mycharacter.glb";
import { Popconfirm } from "antd";

const Avatar = () => {
  const [index, setIndex] = useState(1);
  const avatar = useGLTF(scenePath);
  const { ref, actions, names } = useAnimations(
    avatar.animations,
    avatar.scene
  );
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    console.log(actions);
    actions[names[index]]?.reset().fadeIn(0.5).play();
    return () => {
      actions[names[index]]?.fadeOut(0.5);
    };
  }, [index, actions, names]);

  return (
    <group ref={ref}>
      <primitive
        object={avatar.scene}
        scale={2}
        position-y={-2}
        rotation-y={-0.5}
        position-x={[-1]}
        onClick={() => {
          setIndex((index + 1) % names.length);
          setIsClicked(!isClicked);
        }}
      />

      <group scale={[0.3, 0.3, 0.3]} position={[-1, -2.3, 1]}>
        <Annotation>
          Click me to check out my moves
          <span style={{ fontSize: "1.5em" }}>🌖</span>
        </Annotation>
      </group>
      <group scale={[0.01, 0.01, 0.01]} position={[-3.8, -1.1, 2.8]}>
        <mesh>
          <sphereGeometry args={[1.25, 32, 32]} />
          <meshBasicMaterial />
          <Html center>
            <Popconfirm
              title="Contact"
              description="Paste this in your browser: https://wa.me/+254716611936"
            >
              <a href="#">Contact</a>
            </Popconfirm>
          </Html>
        </mesh>
      </group>
    </group>
  );
};

export function Me() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[1, 1, 1]} />
      <Suspense fallback={null}>
        <Avatar />
      </Suspense>
      <Preload all />
    </>
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
      <div className="annotation">{children}</div>
    </Html>
  );
}
useGLTF.preload(scenePath);
