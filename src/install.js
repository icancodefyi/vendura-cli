import { execSync } from "child_process";

export async function installDeps(targetDir, pm) {
  execSync(`${pm} install`, {
    cwd: targetDir,
    stdio: "inherit"
  });
}
