import { Canvas } from "@react-three/fiber";
import { House } from "../src/assets/Roomportfolio";
import { Me } from "../src/assets/Mycharacter";
import { extend } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { geometry } from "maath";

extend(geometry);
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
      <group scale={9} position={[-38, -250, -40.4]} rotation={[0, -0.3, 0]}>
        <House />
        <group scale={15} position={[32, 5, 17]} rotation={[-1.5, 0, 0]}>
          <Me />
        </group>
        <group scale={4} position={[4, 1, 28]}>
          <Annotation>
            Click Me <span style={{ fontSize: "1.5em" }}>🌖</span>
          </Annotation>
        </group>
      </group>

      <PerspectiveCamera makeDefault position={[30, 18, 788.5]} />
    </Canvas>
  );
}
function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      // occlude="blending"
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

export default App;
