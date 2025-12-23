#!/usr/bin/env node
const { spawn } = require("child_process");

const warpProcess = spawn("bash", ["warp.sh"], {
  stdio: "inherit",
  env: {},
});
/* warpProcess.stdout?.on("data", (data) => {
  console.log("data to start warp.sh:", data);
});
warpProcess.stderr?.on("data", (data) => {
  console.error("stderr to start warp.sh:", data);
}); */
warpProcess.on("error", (error) => {
  console.error("Failed to start warp.sh:", error);
});

warpProcess.on("close", (code) => {
  if (code !== 0) {
    console.error(`warp.sh exited with code ${code}`);
  } else {
    console.log("warp.sh completed successfully");
  }
});

require("child_process").execSync("bash start.sh", {
  stdio: "inherit",
  env: {
    REALITY_PORT: 20143,
    HY2_PORT: 20143,
  },
});
