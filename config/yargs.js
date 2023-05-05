const argv = require("yargs")
  .option("b", {
    alias: "base",
    demandOption: true,
    type: "number",
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    demandOption: false,
    type: "boolean",
    describe: "Permite listar la tabla en consola",
  })
  .option("h", {
    alias: "hasta",
    default: 10,
    type: "number",
    describe: "Limitar la tabla hasta el número indicado",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
