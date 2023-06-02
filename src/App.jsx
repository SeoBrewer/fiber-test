import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Camera from "./components/Camera";
import Matcap from "./components/Matcap";

const App = () => {
  return (
    <div className="Container" style={{ width: "100%", height: "100vh" }}>
      <Canvas>
        <Camera />
        <mesh position={[4, 0, 0]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color={"#ff00ff"} />
        </mesh>
        <Suspense fallback={null}>
          <Matcap />
        </Suspense>

        <mesh position={[-4, 0, 0]}>
          <torusKnotBufferGeometry args={[1, 0.3, 100, 16]} />
          <meshNormalMaterial flatShading={true} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
