import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";


const CarModel = ({ isMobile }) => {
  const car = useGLTF("./car_lightening/scene.gltf");

  return (
    <mesh>
      {/* Brightened Lighting settings */}
      <hemisphereLight intensity={1.5} groundColor='white' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}
        penumbra={1}
        intensity={4}
        color='white'
        castShadow
        shadow-mapSize={1024}  // Correct attribute name for shadow map size
      />
      <pointLight intensity={4} color='white' position={[10, 10, 10]} />

      {/* Model rendering */}
      <primitive
        object={car.scene}
        scale={isMobile ? 1.2 : 2}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3, -1.5]}
        rotation={[-0.01, 0.3, 0]}
      />
    </mesh>
  );
};

const CarDesktop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <CarModel isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default CarDesktop;

