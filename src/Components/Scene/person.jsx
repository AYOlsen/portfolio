import { useGLTF } from '@react-three/drei';

import person from './assets/person.glb';
import React from 'react';

const Person = () => {
    const { scene } = useGLTF(person);

    return (
        <>
            <group>
                <primitive object={scene} position={[1.8, -1.1, 1.4]} rotation={[0, -0.3, 0]} />
            </group>
        </>
    );
};

export { Person };