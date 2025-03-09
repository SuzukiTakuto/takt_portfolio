import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import {
  OBJLoader,
  MTLLoader,
  OrbitControls,
} from "three/examples/jsm/Addons.js";

function Terminal() {
  const router = useRouter();
  const mount = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);
  // レンダラーとカメラの参照を保持するためのref
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);

  useEffect(() => {
    // エンターキー入力検知
    const handleEnterKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        router.push("/home");
      }
    };

    // モバイルの場合はタップで遷移
    const handleTap = () => {
      router.push("/home");
    };

    window.addEventListener("keydown", handleEnterKeyDown);
    window.addEventListener("touchstart", handleTap);

    // オブジェクト表示
    if (isInitialized.current || !mount.current) return;

    isInitialized.current = true;

    const width = mount.current.clientWidth;
    const height = mount.current.clientHeight;

    // シーン、カメラ、レンダラーの作成
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    rendererRef.current = renderer;

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    camera.position.z = 600;

    const ambientLight = new THREE.AmbientLight(0xffffff);
    ambientLight.intensity = 30;
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.intensity = 100;
    directionalLight.position.set(1, 3, 1);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.dampingFactor = 0.25;

    mount.current.appendChild(renderer.domElement);

    const mtlLoader = new MTLLoader();
    const objLoader = new OBJLoader();

    const models: THREE.Object3D[] = Array.from({ length: 2 });
    loadModel(1);
    loadModel(2);

    function loadModel(objectType: number) {
      mtlLoader.load(`models/terminal${objectType}.mtl`, (materials) => {
        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load(`models/terminal${objectType}.obj`, (object) => {
          scene.add(object);
          object.scale.set(150, 150, 150);
          object.rotation.y = Math.PI / 2;
          object.position.x = 0;
          object.position.y = 50;
          models[objectType - 1] = object;
          object.visible = false;
        });
      });
    }

    let lastTime = 0;
    let currentObject = 0;

    function tick(time: number) {
      requestAnimationFrame(tick);

      if (time - lastTime > 800) {
        // modelがまだロードされていない場合は処理をスキップ
        if (models[0] && models[1]) {
          models[currentObject].visible = false;
          currentObject = currentObject === 0 ? 1 : 0;
          models[currentObject].visible = true;
          lastTime = time;
        }
      }

      // OrbitControlsの更新
      controls.update();

      // レンダリング
      if (renderer && scene && camera) {
        renderer.render(scene, camera);
      }
    }

    tick(0);

    // リサイズイベントのハンドラを追加
    const handleResize = () => {
      if (!mount.current || !rendererRef.current || !cameraRef.current) return;

      const width = mount.current.clientWidth;
      const height = mount.current.clientHeight;

      // カメラのアスペクト比を更新
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();

      // レンダラーのサイズを更新
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleEnterKeyDown);

      if (rendererRef.current && mount.current) {
        mount.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-[#89B8BD] text-center text-3xl mt-8 z-10">
        Press Enter!
      </p>
      <div
        className="flex flex-col h-2/3 w-screen items-center justify-center"
        ref={mount}
      ></div>
    </div>
  );
}

export default Terminal;
