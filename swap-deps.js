// swap-deps.js
// Usage: node swap-deps.js [mode]
// mode: 'local' (default) or 'npm'

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = process.argv[2] || 'local';
const pkgPath = path.join(__dirname, '', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));

const localDeps = {
  '@vendura/mongodb': 'file:../vendura/packages/vendura-mongodb',
  '@vendura/next': 'file:../vendura/packages/vendura-next',
  '@vendura/razorpay': 'file:../vendura/packages/vendura-razorpay',
  '@vendura/webhooks': 'file:../vendura/packages/vendura-webhooks',
  'vendura-core': 'file:../vendura/packages/vendura-core'
};
const npmDeps = {
  '@vendura/mongodb': '^0.1.0',
  '@vendura/next': '^0.1.0',
  '@vendura/razorpay': '^0.1.0',
  '@vendura/webhooks': '^0.1.0',
  'vendura-core': '^0.1.0'
};

const targetDeps = mode === 'npm' ? npmDeps : localDeps;

for (const dep in targetDeps) {
  if (pkg.dependencies[dep]) {
    pkg.dependencies[dep] = targetDeps[dep];
  }
}

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(`Swapped dependencies to ${mode} mode.`);