import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Cube(props) {
  const mesh = useRef();
  
  useFrame ( ()=> (
    mesh.current.rotation.x += 0.01,
    mesh.current.rotation.y += 0.01,
    mesh.current.rotation.z += 0.02
    ))  

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
      <meshStandardMaterial color={"purple"}/> 
    </mesh>
  );
}

function SpinningCube() {
    return (
        <>
        <Canvas>
          <ambientLight />
          <pointLight position={[10,10,10]} />
          <Cube position={[1, 1, 1]}/>
        </Canvas>
        </>
      );
}

export default SpinningCube