import { Canvas } from '@react-three/fiber';
import { Desk } from './desk';
import { Deskplant } from './desk-plant';
import { Person } from './person';
import { Computer } from './computer';
import React from 'react';

const Scene = () => {

  return (
    <>
      <Canvas style={{ pointerEvents: 'none' }}>
        <Desk />
        <Deskplant />
        <Person />
        <Computer />
        <ambientLight intensity={2} />
        <directionalLight position={[5, 5, 5]} intensity={4} />
      </Canvas>
    </>
  );
};

export default Scene;