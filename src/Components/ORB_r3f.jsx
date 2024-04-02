import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GradientTexture } from "@react-three/drei";

export default function ORB() {
  return (
    <Canvas id="canvas">
      <pointLight />
      <SPHERE />
    </Canvas>
  );
}

function SPHERE() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current.rotation.y = a / 100;
    myMesh.current.rotation.x = a / 100;
    myMesh.current.rotation.z = a / 100;
  });

  return (
    <mesh ref={myMesh}>
      <sphereGeometry args={[5, 5, 5, 5]} />
      <meshBasicMaterial wireframe>
        <GradientTexture stops={[0, 1]} colors={["#06b9e6", "#000000"]} />
      </meshBasicMaterial>
    </mesh>
  );
}
