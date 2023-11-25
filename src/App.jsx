import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { House } from "../src/assets/Roomportfolio";
import { Me } from "../src/assets/Mycharacterbkp";
import { View } from "./assets/components/Overlayunderlay";
import { Loader } from "../src/assets/Loader";
import logo from "/logo.svg";

import {
  CameraControls,
  PerspectiveCamera,
  Environment,
  Sparkles,
} from "@react-three/drei";
import "./App.css";
function Models() {
  return (
    <Canvas shadows gl={{ antialias: false }}>
      <color attach="background" args={["#202030"]} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <group scale={60} position={[8, 1, 1]} rotation={[0, -0.3, 0]}>
        <View />
      </group>
      <Suspense fallback={null}>
        <group scale={400}>
          <Sparkles count={20000} scale={[20, 20, 10]} size={1.5} speed={4} />
        </group>
        <group scale={9} position={[-38, -250, -40.4]} rotation={[0, -0.3, 0]}>
          <House />
          <group scale={7} position={[32, 19, 17]}>
            <Me />
          </group>
        </group>
      </Suspense>
      <Environment files="/sky.hdr" background blur={0.5} />
      <PerspectiveCamera makeDefault position={[30, 18, 784.5]} />
    </Canvas>
  );
}
function Logo() {
  <div>
  <img src="/logo.svg" />
  </div>
}

function App() {
  return (
    <Suspense fallback={<div style={{position: "absolute", marginTop: "20px", alignItems:"center"}}><Loader /></div>}>
    <Models/>
      <Logo style={{position: "absolute", marginBottom: 10, marginLeft: 10}}/>
    </Suspense>
  );
}

export default App;
