"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 8, 110);

    const cols = 210;
    const rows = 90;
    const particleCount = cols * rows;
    const width = 220;
    const depth = 95;

    const baseX = new Float32Array(particleCount);
    const baseZ = new Float32Array(particleCount);
    const positions = new Float32Array(particleCount * 3);
    const alphas = new Float32Array(particleCount);
    const intensities = new Float32Array(particleCount);

    let index = 0;
    for (let row = 0; row < rows; row += 1) {
      const rowRatio = row / (rows - 1);
      const z = (rowRatio - 0.5) * depth;

      for (let col = 0; col < cols; col += 1) {
        const colRatio = col / (cols - 1);
        const x = (colRatio - 0.5) * width;

        baseX[index] = x;
        baseZ[index] = z;

        const i3 = index * 3;
        positions[i3] = x;
        positions[i3 + 1] = 0;
        positions[i3 + 2] = z;
        alphas[index] = 1;
        intensities[index] = 1;
        index += 1;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute("intensity", new THREE.BufferAttribute(intensities, 1));

    const material = new THREE.PointsMaterial({
      color: "#ffffff",
      size: 0.32,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    material.onBeforeCompile = (shader) => {
      shader.vertexShader = shader.vertexShader
        .replace(
          "#include <common>",
          "#include <common>\nattribute float alpha;\nattribute float intensity;\nvarying float vAlpha;\nvarying float vIntensity;"
        )
        .replace(
          "#include <begin_vertex>",
          "#include <begin_vertex>\nvAlpha = alpha;\nvIntensity = intensity;"
        );

      shader.fragmentShader = shader.fragmentShader
        .replace(
          "#include <common>",
          "#include <common>\nvarying float vAlpha;\nvarying float vIntensity;"
        )
        .replace(
          "vec4 diffuseColor = vec4( diffuse, opacity );",
          "vec4 diffuseColor = vec4( diffuse * vIntensity, opacity * vAlpha );"
        );
    };

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -0.22;
    scene.add(points);

    const applyThemeToParticles = () => {
      const root = document.documentElement;
      const isLightMode = root.classList.contains("light");
      material.color.set(isLightMode ? "#2a2a2a" : "#ffffff");
      material.opacity = isLightMode ? 0.5 : 0.8;
      material.needsUpdate = true;
    };

    applyThemeToParticles();

    const themeObserver = new MutationObserver(() => {
      applyThemeToParticles();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;
    const alphaAttribute = geometry.getAttribute("alpha") as THREE.BufferAttribute;
    const intensityAttribute = geometry.getAttribute("intensity") as THREE.BufferAttribute;

    const raycaster = new THREE.Raycaster();
    const mouseNdc = new THREE.Vector2();
    const interactionPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const intersectionPoint = new THREE.Vector3();
    const localIntersectionPoint = new THREE.Vector3();
    const targetMouse3D = new THREE.Vector3(0, 0, 0);
    const currentWaveCenter = new THREE.Vector3(0, 0, 0);
    let waveCenterYLimit = 22;

    const clock = new THREE.Clock();
    let frameId = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseNdc.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseNdc.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouseNdc, camera);
      const hasIntersection = raycaster.ray.intersectPlane(interactionPlane, intersectionPoint);
      if (!hasIntersection) return;

      localIntersectionPoint.copy(intersectionPoint);
      points.worldToLocal(localIntersectionPoint);

      targetMouse3D.set(
        THREE.MathUtils.clamp(localIntersectionPoint.x, -width * 0.45, width * 0.45),
        THREE.MathUtils.clamp(localIntersectionPoint.y, -waveCenterYLimit, waveCenterYLimit),
        THREE.MathUtils.clamp(localIntersectionPoint.z, -depth * 0.35, depth * 0.35)
      );
    };

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      currentWaveCenter.lerp(targetMouse3D, 0.05);

      const flowSpeed = 15;
      const horizontalOffset = elapsed * flowSpeed;
      const halfWidth = width * 0.5;
      const movingLightX = currentWaveCenter.x + Math.sin(elapsed * 0.35) * (width * 0.26);
      const movingLightX2 = currentWaveCenter.x + Math.cos(elapsed * 0.21 + 1.3) * (width * 0.18);

      for (let i = 0; i < particleCount; i += 1) {
        const i3 = i * 3;
        const baseXValue = baseX[i];
        const wrappedX = ((baseXValue + horizontalOffset + halfWidth) % width) - halfWidth;
        const x = wrappedX;
        const z0 = baseZ[i];

        const centerDistanceX = Math.abs(x - currentWaveCenter.x);
        const normalizedDistanceToCenter = Math.min(1, Math.max(0, centerDistanceX / (halfWidth * 0.95)));
        const centerProximity = 1 - normalizedDistanceToCenter;
        const smoothCenterProximity = centerProximity * centerProximity * (3 - 2 * centerProximity);
        const spread = 0.04 + Math.pow(1 - smoothCenterProximity, 1.15) * 0.96;
        const verticalCursorInfluence = 0.3 + smoothCenterProximity * 0.7;
        const verticalWaveSpace = 0.3 + smoothCenterProximity * 1.05;
        const ridgeY = currentWaveCenter.y * verticalCursorInfluence;

        const waveA = Math.sin(x * 0.13 - elapsed * 2.1 + z0 * 0.07) * 3.6;
        const waveB = Math.cos(x * 0.09 - elapsed * 1.35 + z0 * 0.02) * 2.1;
        const waveC = Math.sin((x + z0) * 0.18 - elapsed * 2.6) * 1.45;
        const turbulence =
          Math.sin(x * 0.24 + elapsed * 3.0) * Math.cos(z0 * 0.19 - elapsed * 2.4) * 1.3;
        const yWave = waveA + waveB + waveC + turbulence;
        const y = ridgeY + yWave * spread * verticalWaveSpace;

        const zWave =
          Math.sin(x * 0.06 - elapsed * 1.8 + z0 * 0.05) * 2.8 +
          Math.cos(x * 0.04 + elapsed * 1.1) * 1.2;
        const zBase = z0 + zWave;
        const z = currentWaveCenter.z + (zBase - currentWaveCenter.z) * spread;

        positionAttribute.array[i3] = x;
        positionAttribute.array[i3 + 1] = y;
        positionAttribute.array[i3 + 2] = z;

        const edgePulse = 0.9 + 0.1 * Math.sin(elapsed * 1.7 + z0 * 0.08);
        const alpha = Math.pow(normalizedDistanceToCenter, 1.65) * edgePulse;
        alphaAttribute.array[i] = alpha;

        const lightBand = Math.exp(-Math.pow((x - movingLightX) / (width * 0.12), 2));
        const lightBand2 = Math.exp(-Math.pow((x - movingLightX2) / (width * 0.17), 2));
        const heightGlow = Math.min(1, Math.abs(y - ridgeY) / 8);
        const intensity = Math.min(1.9, 0.42 + lightBand * 0.9 + lightBand2 * 0.55 + heightGlow * 0.35);
        intensityAttribute.array[i] = intensity;
      }

      positionAttribute.needsUpdate = true;
      alphaAttribute.needsUpdate = true;
      intensityAttribute.needsUpdate = true;

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const distanceToInteractionPlane = Math.abs(camera.position.z);
      const viewportHeightAtPlane =
        2 * Math.tan(THREE.MathUtils.degToRad(camera.fov * 0.5)) * distanceToInteractionPlane;
      waveCenterYLimit = viewportHeightAtPlane * 0.4;
    };

    onResize();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      themeObserver.disconnect();
      window.cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
      aria-hidden="true"
    />
  );
}
