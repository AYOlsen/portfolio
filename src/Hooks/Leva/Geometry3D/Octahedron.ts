import { folder, useControls } from "leva";

import { LEVA } from "../../../Configs/Leva";
import { SettingsLeva } from "../../../Settings/Leva";
import { SettingsLevaGeometryOctahedron as Geometry } from "../../../Settings/Leva/Geometry/Octahedron";

/**
 * Custom React Hook for Leva Controls.
 */
function useLeva() {
  const {
    detail, //
    radius,
  } = useControls(
    LEVA.SCHEMA.COMPONENTS,
    {
      Geometry: folder(
        {
          Octahedron: folder({
            detail: Geometry.detail(),
            radius: Geometry.radius(),
          }),
        },
        SettingsLeva.folder(LEVA.ORDER.GEOMETRY)
      ),
    },
    SettingsLeva.folder(LEVA.ORDER.COMPONENTS)
  );

  return {
    detail,
    radius,
  };
}

export { useLeva };
