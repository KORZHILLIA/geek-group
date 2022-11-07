const http = require("http");
const fs = require("fs/promises");
const readline = require("readline");

const PORT = 3001;
const server = http.createServer();
server.listen(PORT, () => console.log("ok"));

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", async (folderName) => {
  const lowName = folderName.toLowerCase();
  try {
    await fs.mkdir(`${__dirname}/${folderName}`);
    await fs.writeFile(
      `${__dirname}/${folderName}/${folderName}.jsx`,
      `const ${folderName} = () => {};\nexport default ${folderName}`
    );
    await fs.writeFile(
      `${__dirname}/${folderName}/${lowName}.module.css`,
      `.${lowName} {};`
    );
    await fs.writeFile(
      `${__dirname}/${folderName}/index.js`,
      `export {default} from './${folderName}';`
    );
  } catch (error) {
    console.log(error);
  }
});
