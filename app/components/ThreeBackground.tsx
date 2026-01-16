'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

interface ThreeBackgroundProps {
  text?: string;
}

export default function ThreeBackground({ text = 'SILVER' }: ThreeBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Font loader for 3D text
    const fontLoader = new FontLoader();
    fontLoader.load(
      'https://raw.githubusercontent.com/danielyl123/person/refs/heads/main/fonts/helvetiker_regular.typeface.json',
      (font) => {
        const textGeometry = new TextGeometry(text, {
          font,
          size: 1,
          depth: 0,
          curveSegments: 5,
          bevelEnabled: true,
          bevelThickness: 0,
          bevelSize: 0,
          bevelOffset: 0,
          bevelSegments: 4,
        });
        textGeometry.computeBoundingBox();
        textGeometry.center();

        const textMaterial = new THREE.MeshBasicMaterial({
          color: 0xe91e8c,
          transparent: true,
          opacity: 0.3,
        });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        scene.add(textMesh);
      }
    );

    // Torus with iridescent material
    const torusGeometry = new THREE.TorusGeometry(0.7, 0.4, 100, 60);
    const torusMaterial = new THREE.MeshPhysicalMaterial({
      metalness: 0,
      roughness: 0,
      iridescence: 1,
      iridescenceIOR: 1.5,
      iridescenceThicknessRange: [100, 324],
      transmission: 1,
      ior: 1.2,
      thickness: 0.8,
      transparent: true,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.z = 1;
    scene.add(torus);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    scene.add(ambientLight);

    const lights = [
      { x: -1, y: 2, z: 0 },
      { x: -1, y: -2, z: 0 },
      { x: 1, y: -2, z: 0 },
      { x: 1, y: 2, z: 0 },
    ];

    lights.forEach((pos) => {
      const pointLight = new THREE.PointLight(0xffffff, 10);
      pointLight.position.set(pos.x, pos.y, pos.z);
      scene.add(pointLight);
    });

    // Animation
    const clock = new THREE.Clock();
    let animationId: number;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      torus.rotation.x = elapsedTime * 0.5;
      torus.rotation.y = elapsedTime * 0.3;

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(tick);
    };
    tick();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
    };
  }, [text]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
