import { readFile } from "node:fs/promises";

async function main() {
  let filePath = "C:/Users/91883/OneDrive/Desktop/Day9/package.json";
  let fileData = await readFile(filePath, { encoding: "utf-8" });
  console.log(fileData);
}

main();