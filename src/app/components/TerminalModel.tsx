import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import {
  AnimationAction,
  AnimationMixer,
  Group,
  Object3DEventMap,
} from "three";

const TerminalModel = () => {
  const { nodes, scene, animations } = useGLTF("models/terminal.glb");
  const { actions, ref } = useAnimations(animations);
  const actionRef = React.useRef<AnimationAction | null>();
  const [mixer] = useState(() => new AnimationMixer(scene));

  useEffect(() => {
    if (!mixer) return;
    const action = mixer.clipAction(animations[3]);
    action.play();
  }, [animations, mixer]);

  return (
    <group ref={ref as React.Ref<Group<Object3DEventMap>>}>
      <group rotation={[-Math.PI / 2, Math.PI / 2, 0]}>
        <primitive object={scene} />
      </group>
    </group>
  );
};

export default TerminalModel;
