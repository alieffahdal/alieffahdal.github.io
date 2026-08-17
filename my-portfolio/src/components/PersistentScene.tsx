import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AQUA = "#33c2cc";
const LAVENDER = "#7a57db";
const CORAL = "#ea4884";

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
  const { positions, colors } = useMemo(() => {
    const count = 460;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [new THREE.Color(AQUA), new THREE.Color(LAVENDER), new THREE.Color(CORAL)];
    for (let i = 0; i < count; i++) {
      const r = 5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[i % palette.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame(() => {
    if (!reduced && ref.current) ref.current.rotation.y -= 0.0004;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial vertexColors size={0.035} transparent opacity={0.5} />
    </points>
  );
}

function Trinket({
  position,
  color,
  scale = 0.42,
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
    if (!crossOnScroll || !mesh.current) return;
    if (reduced) {
      mesh.current.position.x = crossOnScroll.toX;
      return;
    }
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
      <meshBasicMaterial color={color} />
      <lineSegments>
        <edgesGeometry args={[geo]} />
        <lineBasicMaterial color="#050311" transparent opacity={0.4} />
      </lineSegments>
    </mesh>
  );
}

function WireframeCore() {
  const group = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();
  const { pointer } = useThree();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(2, 1), []);

  useEffect(() => {
    if (reduced || !group.current) return;
    const ctx = gsap.context(() => {
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
        <lineBasicMaterial color={AQUA} transparent opacity={0.55} />
      </lineSegments>
      <points geometry={geo}>
        <pointsMaterial color={LAVENDER} size={0.06} transparent opacity={0.95} />
      </points>
    </group>
  );
}

export default function PersistentScene() {
  const wrapRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapRef}
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 48 }}
        gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <WireframeCore />
        <Trinket
          position={[2.6, 1.3, 0.6]}
          color={CORAL}
          scale={0.42}
          shape="octahedron"
          speed={1}
          crossOnScroll={{ trigger: "#proyek", fromX: 2.6, toX: -2.6 }}
        />
        <Trinket
          position={[-2.7, -1, 0.3]}
          color={LAVENDER}
          scale={0.3}
          shape="tetrahedron"
          speed={1.3}
          crossOnScroll={{ trigger: "#proyek", fromX: -2.7, toX: 2.7 }}
        />
        <ParticleField />
      </Canvas>
    </div>
  );
}
