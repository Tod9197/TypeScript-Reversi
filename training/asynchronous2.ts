import fs from "fs";
import util from "util";

const promisifyReadFile = util.promisify(fs.readFile);

async function main() {
  const data = await promisifyReadFile("package.json");
  const fileCotent = data.toString();
  console.log(fileCotent);
}

main();
