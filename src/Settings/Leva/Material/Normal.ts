import { SettingsLevaMaterialBasic as BasicMaterial } from "./Basic";
import { SettingsLevaMaterialPhong as PhongMaterial } from "./Phong";

/**
 * Mesh Normal Material settings for Leva.
 *
 * @see https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial
 */
export namespace SettingsLevaMaterialNormal {
  export const bumpMap = PhongMaterial.bumpMap;

  export const bumpScale = PhongMaterial.bumpScale;

  export const displacementBias = PhongMaterial.displacementBias;

  export const displacementMap = PhongMaterial.displacementMap;

  export const displacementScale = PhongMaterial.displacementScale;

  export const flatShading = PhongMaterial.flatShading;

  export const normalMap = PhongMaterial.normalMap;

  export const normalMapType = PhongMaterial.normalMapType;

  export const normalScale = PhongMaterial.normalScale;

  export const wireframe = BasicMaterial.wireframe;
}
