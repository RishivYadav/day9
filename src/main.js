import { readFile } from "node:fs/promises";

async function main() {
  try {
    let filePath = "C:/Users/91883/OneDrive/Desktop/Day9/package.json";
    let fileData = await readFile(filePath, { encoding: "utf8" });
    console.log(fileData);
  } catch (e) {
    console.log("Exception Occured :: ", e.message);
  }
}

main();