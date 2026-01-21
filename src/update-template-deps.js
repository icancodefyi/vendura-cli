import fs from "fs-extra";
import path from "path";

export async function updateTemplateDeps(targetDir) {
  const pkgPath = path.join(targetDir, "package.json");
  if (!(await fs.pathExists(pkgPath))) return;
  const pkg = await fs.readJson(pkgPath);

  pkg.dependencies = {
    ...pkg.dependencies,
    "@venduraa/core": "^0.1.0",
    "@venduraa/mongodb": "^0.1.0",
    "@venduraa/next": "^0.1.0",
    "@venduraa/razorpay": "^0.1.0",
    "@venduraa/webhooks": "^0.1.0"
  };
  // Remove any old vendura-core or file: deps
  delete pkg.dependencies["vendura-core"];
  delete pkg.dependencies["@vendura/mongodb"];
  delete pkg.dependencies["@vendura/next"];
  delete pkg.dependencies["@vendura/razorpay"];
  delete pkg.dependencies["@vendura/webhooks"];

  await fs.writeJson(pkgPath, pkg, { spaces: 2 });
}
