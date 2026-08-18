import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffectiveTheme } from "../hooks/useEffectiveTheme";

gsap.registerPlugin(ScrollTrigger);

/* Colors are picked per theme so the wireframe stays legible on both a
   white and a near-black background; the lime accent is the one constant
   pop, matching the site's monochrome-plus-one-accent palette. */
const PALETTE = {
  light: { wire: "#3a3a3a", node: "#8fb300", trinket: "#d3ff3f", trinketDark: "#1a1a1a" },
  dark: { wire: "#b0b0b0", node: "#d3ff3f", trinket: "#d3ff3f", trinketDark: "#e5e5e5" },
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

function ParticleField({ color }: { color: string }) {
  const ref = useRef<THREE.Points>(null);
  const reduced = useReducedMotion();
  const positions = useMemo(() => {
    const count = 380;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame(() => {
    if (!reduced && ref.current) ref.current.rotation.y -= 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={color} size={0.03} transparent opacity={0.35} />
    </points>
  );
}

function Trinket({
  position,
  color,
  scale = 0.36,
  shape = "octahedron",
  speed = 1,
  crossOnScroll,
}: {
  position: [number, number, number];
  color: string;
  scale?: number;
  shape?: "octahedron" | "tetrahedron";
  speed?: number;
  crossOnScroll?: { trigger: string; fromX: number; toX: number };
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const reduced = useReducedMotion();
  const baseY = position[1];
  const geo = useMemo(
    () =>
      shape === "octahedron"
        ? new THREE.OctahedronGeometry(scale, 0)
        : new THREE.TetrahedronGeometry(scale, 0),
    [shape, scale],
  );

  useEffect(() => {
    if (!crossOnScroll || !mesh.current || reduced) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        mesh.current!.position,
        { x: crossOnScroll.fromX },
        {
          x: crossOnScroll.toX,
          ease: "none",
          scrollTrigger: {
            trigger: crossOnScroll.trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    });
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useFrame((state) => {
    if (!mesh.current || reduced) return;
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.x = t * 0.6;
    mesh.current.rotation.y = t * 0.8;
    mesh.current.position.y = baseY + Math.sin(t * 1.4) * 0.18;
  });

  return (
    <mesh ref={mesh} position={position} geometry={geo}>
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function WireframeCore({ wireColor, nodeColor }: { wireColor: string; nodeColor: string }) {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();
  const { pointer } = useThree();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);

  useEffect(() => {
    if (reduced || !group.current) return;
    const ctx = gsap.context(() => {
      // hero -> about: drift left, shrink
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
      tl.to(group.current!.position, { x: -1.6, y: -0.4, ease: "none" }, 0).to(
        group.current!.scale,
        { x: 0.55, y: 0.55, z: 0.55, ease: "none" },
        0,
      );

      // proyek section: sweep across to the right
      gsap.fromTo(
        group.current!.position,
        { x: -1.6 },
        {
          x: 1.6,
          ease: "none",
          scrollTrigger: {
            trigger: "#proyek",
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );
    });
    return () => ctx.revert();
  }, [reduced]);

  useFrame((state) => {
    if (reduced) return;
    if (group.current) {
      group.current.rotation.y += 0.0016;
      group.current.rotation.x += 0.0005;
    }
    state.camera.position.x += (pointer.x * 1.2 - state.camera.position.x) * 0.03;
    state.camera.position.y += (pointer.y * 0.8 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={group}>
      <lineSegments>
        <wireframeGeometry args={[geo]} />
        <lineBasicMaterial color={wireColor} transparent opacity={0.45} />
      </lineSegments>
      <points geometry={geo}>
        <pointsMaterial color={nodeColor} size={0.055} transparent opacity={0.9} />
      </points>
    </group>
  );
}

function Scene({ colors }: { colors: (typeof PALETTE)["light"] }) {
  return (
    <>
      <WireframeCore wireColor={colors.wire} nodeColor={colors.node} />
      <Trinket
        position={[2.6, 1.2, 0.6]}
        color={colors.trinket}
        scale={0.38}
        shape="octahedron"
        speed={1}
        crossOnScroll={{ trigger: "#proyek", fromX: 2.6, toX: -2.6 }}
      />
      <Trinket
        position={[-2.7, -1, 0.3]}
        color={colors.trinketDark}
        scale={0.28}
        shape="tetrahedron"
        speed={1.3}
        crossOnScroll={{ trigger: "#proyek", fromX: -2.7, toX: 2.7 }}
      />
      <ParticleField color={colors.node} />
    </>
  );
}

export default function PersistentScene() {
  const theme = useEffectiveTheme();
  const colors = PALETTE[theme];

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }} aria-hidden="true">
      {/* key forces a clean remount (and fresh materials) on theme change */}
      <Canvas
        key={theme}
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <Scene colors={colors} />
      </Canvas>
    </div>
  );
}
