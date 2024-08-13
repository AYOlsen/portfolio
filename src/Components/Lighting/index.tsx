import { GroupProps } from "@react-three/fiber";

import { Lighting as LightingDemo } from "./Demo";
import { Lighting as LightingStudio } from "./Studio";
import { Lighting as LightingThreePoint } from "./ThreePoint";
import { Lighting as LightingThreePointVolumetric } from "././ThreePointVolumetric";
import { useLeva } from "../../Hooks/Leva/Lighting";
import React from "react";

const LIGHTING = {
  "—None—": undefined,
  Demo: <LightingDemo />,
  Studio: <LightingStudio />,
  "Three Point": <LightingThreePoint />,
  "Three Point Volumetric": <LightingThreePointVolumetric />,
} as const;

/**
 * Lighting.
 *
 * @param {GroupProps} props
 * @returns {React.JSX.Element}
 */
const Lighting = (props: GroupProps): React.JSX.Element => {
  // Leva Controls.
  const { lighting } = useLeva(LIGHTING);

  return (
    <group name="Lighting" {...props}>
      {lighting}
    </group>
  );
};

export { Lighting };
