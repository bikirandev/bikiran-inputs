const fs = require("fs");
const path = require("path");

const packageJsonPath = path.join(__dirname, "dist", "package.json");
const packageData = {
  type: "module",
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageData, null, 2) + "\n");
console.log("✔ Correctly written dist/package.json before publishing.");
