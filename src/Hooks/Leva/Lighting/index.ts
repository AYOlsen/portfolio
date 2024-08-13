import { useControls } from "leva";

import { LEVA } from "../../../Configs/Leva";
import { SettingsLeva } from "../../../Settings/Leva";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva(LIGHTING: any) {
  const { lighting } = useControls(
    LEVA.SCHEMA.LIGHTING,
    {
      lighting: {
        label: "Lighting",
        options: LIGHTING,
        value: LIGHTING["Three Point Volumetric"],
      },
    },
    SettingsLeva.folder(LEVA.ORDER.LIGHTING)
  );

  return {
    lighting,
  };
}

export { useLeva };
