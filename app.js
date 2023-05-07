const { createFile } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

createFile(argv.base, argv.l, argv.h)
  .then((nameFile) => console.log(nameFile.rainbow, "creado OK"))
  .catch((err) => console.log(err));
