import { useGLTF } from '@react-three/drei';

import desk from './assets/desk.glb';
import React from 'react';

const Desk = () => {
    const { scene } = useGLTF(desk);

    return (
        <>
            <group>
                <primitive object={scene} position={[1.8, -1.1, 1.5]} rotation={[0 , -0.5, 0]}/>
            </group>
        </>
    );
};

export { Desk };