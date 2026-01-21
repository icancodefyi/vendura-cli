import degit from "degit";

export async function fetchTemplate(targetDir) {
  const emitter = degit("VenduraJS/vendura-playground", {
    cache: false,
    force: true
  });

  await emitter.clone(targetDir);
}
