import prompts from "prompts";

export async function promptUser() {
  return prompts([
    {
      type: "text",
      name: "projectName",
      message: "Project name:",
      validate: (v) => v ? true : "Project name is required"
    },
    {
      type: "select",
      name: "packageManager",
      message: "Package manager:",
      choices: [
        { title: "pnpm", value: "pnpm" },
        { title: "npm", value: "npm" },
        { title: "yarn", value: "yarn" }
      ],
      initial: 0
    },
    {
      type: "toggle",
      name: "useMongo",
      message: "Use MongoDB?",
      initial: true,
      active: "yes",
      inactive: "no"
    },
    {
      type: "toggle",
      name: "useRazorpay",
      message: "Use Razorpay?",
      initial: true,
      active: "yes",
      inactive: "no"
    }
  ]);
}
