import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Trail } from "@react-three/drei";

export default function ORB() {
  return (
    <Canvas id="canvas">
      <SPHERE />
      <spotLight intensity={15} decay={10} position={[-10, 10, 0]}></spotLight>
      <hemisphereLight intensity={0.1} position={[10, 0, 0]}></hemisphereLight>
    </Canvas>
  );
}

function SPHERE() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 2;
    myMesh.current.rotation.x = a / 2;
  });

  return (
    <mesh ref={myMesh}>
      <Trail></Trail>

      <sphereGeometry args={[1.5, 1, 0]} />

      <meshStandardMaterial
        wireframe
        color="white"
        metalness={50}
        roughness={0}
        alphaHash={true}
      />
    </mesh>
  );
}
