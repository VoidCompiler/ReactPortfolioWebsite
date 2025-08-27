import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CuteCubeStructure = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#44444E");

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffe4e1, 0.8);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Detect mobile
    const isMobile = window.innerWidth < 768;

    // Cute Cube Structure
    const cubes = [];
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const pastelColors = [0xffb6c1, 0xb0e0e6, 0xffe4b5, 0xe6e6fa, 0x98fb98];

    const gridSize = isMobile ? 2 : 3; // smaller grid on mobile
    const spacing = isMobile ? 2 : 1.8;

    for (let x = -Math.floor(gridSize / 2); x <= Math.floor(gridSize / 2); x++) {
      for (let y = -Math.floor(gridSize / 2); y <= Math.floor(gridSize / 2); y++) {
        for (let z = -Math.floor(gridSize / 2); z <= Math.floor(gridSize / 2); z++) {
          if (x === 0 && y === 0 && z === 0 && gridSize > 2) continue; // skip center
          const color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
          const material = new THREE.MeshPhongMaterial({ color, shininess: 80 });
          const cube = new THREE.Mesh(cubeGeometry, material);
          cube.position.set(x * spacing, y * spacing, z * spacing);
          cube.castShadow = true;
          cube.receiveShadow = true;
          cube.scale.set(0, 0, 0); // start invisible
          scene.add(cube);
          cubes.push(cube);
        }
      }
    }

    // Randomize cube order for cute stagger
    cubes.sort(() => Math.random() - 0.5);

    // Pop-in animation for cubes
    cubes.forEach((cube, index) => {
      const delay = index * 100; // stagger 100ms
      setTimeout(() => {
        let start = null;
        const duration = 400;
        const animateScale = (timestamp) => {
          if (!start) start = timestamp;
          let elapsed = timestamp - start;
          let progress = elapsed / duration;
          if (progress > 1) progress = 1;

          if (progress < 0.7) {
            const scale = 1.1 * (progress / 0.7);
            cube.scale.set(scale, scale, scale);
          } else {
            const scale = 1.1 - (0.1 * (progress - 0.7) / 0.3);
            cube.scale.set(scale, scale, scale);
          }

          if (progress < 1) requestAnimationFrame(animateScale);
          else cube.scale.set(1, 1, 1);
        };
        requestAnimationFrame(animateScale);
      }, delay);
    });

    // Track pointer
    const pointer = new THREE.Vector2(0, 0);
    window.addEventListener("mousemove", (event) => {
      if (!isMobile) {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
      }
    });
    window.addEventListener("touchmove", (event) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        pointer.x = (touch.clientX / window.innerWidth) * 2 - 1;
        pointer.y = -(touch.clientY / window.innerHeight) * 2 + 1;
      }
    }, { passive: true });

    const target = new THREE.Vector3();

    // Main animation loop
    const animate = () => {
      const depth = isMobile ? 3 : 5;
      target.set(pointer.x * depth, pointer.y * depth, depth);

      cubes.forEach((cube, i) => {
        // Smooth rotation toward pointer
        const dir = new THREE.Vector3().subVectors(target, cube.position).normalize();
        const quaternion = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 0, 1),
          dir
        );
        cube.quaternion.slerp(quaternion, 0.1);

        // Subtle floating
        cube.position.y += Math.sin(Date.now() * 0.001 + i) * 0.002;
      });

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      if (mountRef.current) {
        const { clientWidth, clientHeight } = mountRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '400px',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    />
  );
};

export default CuteCubeStructure;