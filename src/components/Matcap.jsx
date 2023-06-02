import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const Matcap = () => {
  const matcap = useLoader(TextureLoader, "public/matcaps/matcap1.png");

  return (
    <mesh position={[0, 0, 0]}>
      <sphereBufferGeometry args={[0.5, 16, 16]} />
      <meshMatcapMaterial matcap={matcap} />
    </mesh>
  );
};

export default Matcap;
