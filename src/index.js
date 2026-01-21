import path from "path";
import { promptUser } from "./prompts.js";
import { fetchTemplate } from "./template.js";
import { generateConfig } from "./config.js";
import { installDeps } from "./install.js";
import { updateTemplateDeps } from "./update-template-deps.js";

export async function run() {
  const answers = await promptUser();
  const targetDir = path.resolve(process.cwd(), answers.projectName);


  await fetchTemplate(targetDir);
  await updateTemplateDeps(targetDir);
  await generateConfig(targetDir, answers);
  await installDeps(targetDir, answers.packageManager);

  console.log(`
✅ Vendura app created!

Next steps:
  cd ${answers.projectName}
  cp .env.example .env
  ${answers.packageManager} dev
`);
}
