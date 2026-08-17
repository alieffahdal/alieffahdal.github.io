import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const reduced = useReducedMotion();
  const positions = useMemo(() => {
    const count = 420;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame(() => {
    if (!reduced && ref.current) ref.current.rotation.y -= 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#35E0C6" size={0.03} transparent opacity={0.35} />
    </points>
  );
}

function WireframeCore() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();
  const { pointer } = useThree();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);

  useFrame((state) => {
    if (reduced) return;
    if (group.current) {
      group.current.rotation.y += 0.0018;
      group.current.rotation.x += 0.0006;
    }
    state.camera.position.x += (pointer.x * 1.4 - state.camera.position.x) * 0.03;
    state.camera.position.y += (pointer.y * 1.0 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <lineSegments>
        <wireframeGeometry args={[geo]} />
        <lineBasicMaterial color="#35E0C6" transparent opacity={0.5} />
      </lineSegments>
      <points geometry={geo}>
        <pointsMaterial color="#F2B441" size={0.06} transparent opacity={0.9} />
      </points>
    </group>
  );
}

function Trinket() {
  const mesh = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();
  const baseY = 1.3;
  const geo = useMemo(() => new THREE.OctahedronGeometry(0.42, 0), []);

  useFrame((state) => {
    if (!mesh.current || reduced) return;
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.6;
    mesh.current.rotation.y = t * 0.8;
    mesh.current.position.y = baseY + Math.sin(t * 1.4) * 0.18;
  });

  return (
    <mesh ref={mesh} position={[2.6, baseY, 0.6]} geometry={geo}>
      <meshBasicMaterial color="#FF6B4A" />
      <lineSegments>
        <edgesGeometry args={[geo]} />
        <lineBasicMaterial color="#1a0a05" transparent opacity={0.35} />
      </lineSegments>
    </mesh>
  );
}

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ position: "absolute", inset: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]}
        frameloop={visible ? "always" : "never"}
      >
        <WireframeCore />
        <Trinket />
        <ParticleField />
      </Canvas>
    </div>
  );
}
