import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Stage,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import TerminalModel from "./TerminalModel";

const TerminalCanvas = () => {
  return (
    <Suspense fallback={null}>
      <Canvas
        style={{
          width: 100 + "vw",
          height: 100 + "vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <ambientLight />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Stage>
          <TerminalModel />
        </Stage>
      </Canvas>
    </Suspense>
  );
};

export default TerminalCanvas;
