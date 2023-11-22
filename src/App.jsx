import { Canvas } from "@react-three/fiber";
import { House } from "../src/assets/Roomportfolio";
import { Me } from "../src/assets/Mycharacterbkp";
import { View } from "./assets/components/Overlayunderlay";

import {
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import "./App.css";

function App() {
  return (
    <Canvas flat>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <ambientLight intensity={Math.PI / 2} />
      <group scale={60} position={[8, 1, 1]} rotation={[0, -0.3, 0]}>
        <View />
      </group>
      <group scale={9} position={[-38, -250, -40.4]} rotation={[0, -0.3, 0]}>
        <House />
        <group scale={7} position={[32, 19, 17]}>
          <Me />
        </group>
      </group>
      <PerspectiveCamera makeDefault position={[30, 18, 784.5]} />
      <Environment preset="city" background blur={1} />
    </Canvas>
  );
}

export default App;
