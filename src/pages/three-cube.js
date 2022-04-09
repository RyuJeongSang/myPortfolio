import React from "react";
import { Canvas } from "@react-three/fiber";
import { mdiApple, mdiGit, mdiGithub, mdiReact, mdiSpotify } from "@mdi/js";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import { AnimatedIcon } from "../components/molecules/animated-icon";

const icons = [
  { path: mdiSpotify, color: "#1ed760", invert: true },
  { path: mdiApple, color: "#ddd" },
  { path: mdiReact, color: "#61dafb" },
  { path: mdiGithub, color: "#000" },
  { path: mdiGit, color: "#f05030" },
];

export const ThreeCube = () => {
  const idxMiddle = (icons.length - 1) / 2;
  return (
    <Canvas colorManagement={false} camera={{ position: [0, 1, 10] }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[2, 2, 2]} />
      <OrbitControls />
      {icons.map((props, i) => (
        <AnimatedIcon key={i} {...props} position-x={(i - idxMiddle) * 2} />
      ))}
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.5, 0]}
        opacity={0.4}
        width={10}
        height={10}
        blur={2}
        far={1.5}
      />
    </Canvas>
  );
};
