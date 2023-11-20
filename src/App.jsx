import { Canvas } from "@react-three/fiber";
import { House } from "../src/assets/Roomportfolio";
import { OrbitControls, Stage } from "@react-three/drei";
import {
  Fisheye,
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
      <group scale={9} position={[-38, -250, -40.4]} rotation={[0, -0.3, 0]}>
        <House />
      </group>
      <Environment preset="city" background blur={1} />
      <PerspectiveCamera makeDefault position={[0, 0, 18.5]} />
    </Canvas>
  );
}

export default App;
