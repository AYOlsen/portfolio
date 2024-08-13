import { useGLTF } from '@react-three/drei';

import computer from './assets/computer.glb';
import React from 'react';

const Computer = () => {
    const { scene } = useGLTF(computer);

    return (
        <>
            <group>
                <primitive object={scene} position={[1.8, -1.1, 1.5]} rotation={[0 , -0.5, 0]}/>
            </group>
        </>
    );
};

export {Computer};