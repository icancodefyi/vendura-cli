#!/usr/bin/env node

import { run } from "../src/index.js";

run().catch((err) => {
  console.error("❌ Failed to create Vendura app");
  console.error(err);
  process.exit(1);
});
