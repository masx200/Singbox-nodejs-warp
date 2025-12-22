#!/usr/bin/env node
require('child_process').execSync('bash start.sh', { 
  stdio: "inherit",
  env: {
    REALITY_PORT: 20143,
    HY2_PORT: 20143,
  },
});