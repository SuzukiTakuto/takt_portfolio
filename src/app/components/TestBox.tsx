import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { FontLoader, TextGeometry } from "three/examples/jsm/Addons.js";
import { Html, OrbitControls, Text } from "@react-three/drei";

const TestBox = (props: JSX.IntrinsicElements["mesh"]) => {
  const ref = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  let textGeometry: TextGeometry;

  //useFrame((state, delta) => (ref.current.rotation.x += 0.01));

  const fontLoader = new FontLoader();

  fontLoader.load("fonts/Cousine_Regular.json", (font) => {
    textGeometry = new TextGeometry("Hello World", {
      font: font,
      size: 0.5,
      height: 0.2,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.03,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
  });

  new FontLoader();
  return (
    <group ref={groupRef}>
      <mesh
        {...props}
        ref={ref}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[6, 4, 0.3]} />
        <Text
          color={"#fff"}
          fontSize={0.4}
          anchorX="center"
          anchorY="bottom"
          font="fonts/Cousine_Regular.json"
          position={[-1, 0, 0.16]}
        >
          aaa
        </Text>

        <meshBasicMaterial color={"#303030"} />
      </mesh>
    </group>
  );
};

export default TestBox;
