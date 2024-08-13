import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { AnimationMixer} from "three";

import animationGlb from "./assets/desk-plant.glb";
import React from "react";

const Deskplant = () => {
    const { scene, animations } = useGLTF(animationGlb, true);
    const animationClip = animations[0];
    const animationRef = useRef(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mixer = new AnimationMixer(animationRef.current);

    useEffect(() => {
        mixer.clipAction(animationClip, animationRef.current).play();
    }, [animationClip, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return (
        <group name="Animation" position={[1.8, -1.1, 1.5]} rotation={[0 , -0.2, 0]}>
        <primitive object={scene} ref={animationRef} />
        </group>
    );
};

export { Deskplant };