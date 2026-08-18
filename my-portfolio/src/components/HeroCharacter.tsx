import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { useEffectiveTheme } from "../hooks/useEffectiveTheme";
import "../styles/HeroCharacter.css";

const PALETTE = {
  light: { line: "#1a1a1a", node: "#8fb300" },
  dark: { line: "#e5e5e5", node: "#d3ff3f" },
};

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

// tracked on the whole window (not just the small character canvas) so the
// arm keeps pointing at the cursor no matter where on the page it is.
function usePagePointer() {
  const pointer = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);
  return pointer;
}

const JOINTS: [number, number, number][] = [
  [0, 0.75, 0],
  [-0.5, 0.85, 0],
  [0.5, 0.85, 0],
  [-0.18, -0.55, 0],
  [0.18, -0.55, 0],
];

// the figure's own geometry spans roughly y=-0.65 (feet) to y=1.97 (head
// top); the camera looks at the world origin, so this offset re-centers
// the whole figure vertically to keep the head inside the frustum.
const BASE_Y = -0.68;

function Figure({ line, node }: { line: string; node: string }) {
  const group = useRef<Group>(null);
  const head = useRef<Group>(null);
  const waveArm = useRef<Group>(null);
  const reduced = useReducedMotion();
  const pointer = usePagePointer();

  useFrame((state) => {
    if (reduced) return;
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = BASE_Y + Math.sin(t * 1.2) * 0.06;
      group.current.rotation.y = Math.sin(t * 0.4) * 0.18;
    }
    if (head.current) {
      const targetHeadY = pointer.current.x * 0.5;
      const targetHeadX = -pointer.current.y * 0.35;
      head.current.rotation.y += (targetHeadY - head.current.rotation.y) * 0.08;
      head.current.rotation.x += (targetHeadX - head.current.rotation.x) * 0.08;
    }
    if (waveArm.current) {
      // cursor higher on the page -> arm raised further; cursor lower -> arm rests down
      const targetZ = -0.75 - pointer.current.y * 0.75;
      const targetX = pointer.current.x * 0.6;
      waveArm.current.rotation.z += (targetZ - waveArm.current.rotation.z) * 0.08;
      waveArm.current.rotation.x += (targetX - waveArm.current.rotation.x) * 0.08;
    }
  });

  const mat = <meshBasicMaterial color={line} wireframe />;

  return (
    <group ref={group} position={[0, BASE_Y, 0]}>
      <group ref={head} position={[0, 1.55, 0]}>
        <mesh>
          <sphereGeometry args={[0.42, 14, 12]} />
          {mat}
        </mesh>
        <mesh position={[-0.15, 0.05, 0.36]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={node} />
        </mesh>
        <mesh position={[0.15, 0.05, 0.36]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color={node} />
        </mesh>
      </group>
      <mesh position={[0, 0.75, 0]}>
        <capsuleGeometry args={[0.34, 0.7, 4, 10]} />
        {mat}
      </mesh>
      <group position={[-0.5, 1.15, 0]} rotation={[0, 0, 0.25]}>
        <mesh position={[0, -0.35, 0]}>
          <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
          {mat}
        </mesh>
      </group>
      <group ref={waveArm} position={[0.5, 1.15, 0]}>
        <mesh position={[0, -0.35, 0]}>
          <capsuleGeometry args={[0.12, 0.6, 4, 8]} />
          {mat}
        </mesh>
      </group>
      <mesh position={[-0.18, -0.15, 0]}>
        <capsuleGeometry args={[0.15, 0.7, 4, 8]} />
        {mat}
      </mesh>
      <mesh position={[0.18, -0.15, 0]}>
        <capsuleGeometry args={[0.15, 0.7, 4, 8]} />
        {mat}
      </mesh>
      {JOINTS.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color={node} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroCharacter() {
  const theme = useEffectiveTheme();
  const colors = PALETTE[theme];

  return (
    <div className="hero-figure" aria-hidden="true">
      <Canvas
        key={theme}
        camera={{ position: [0, 0, 4.1], fov: 38 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <Figure line={colors.line} node={colors.node} />
      </Canvas>
    </div>
  );
}
