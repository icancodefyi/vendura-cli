import fs from "fs-extra";
import path from "path";

export async function generateConfig(targetDir, answers) {
  const config = `
export default {
  database: ${answers.useMongo ? `{ provider: "mongodb" }` : `{ provider: "none" }`},
  payments: {
    razorpay: { enabled: ${answers.useRazorpay} }
  }
};
`.trim();

  await fs.writeFile(
    path.join(targetDir, "vendura.config.ts"),
    config
  );
}
