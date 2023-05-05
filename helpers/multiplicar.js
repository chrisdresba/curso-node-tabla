const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    try {
      let salida = "";
      let consola = "";
      let nombreArchivo = `tabla-${base}.txt`;

      for (let index = 1; index <= hasta; index++) {
        salida += `${base} x ${index} = ${base * index}\n`;
        consola += `${base} ${"x".green} ${index} ${"=".green} ${
          base * index
        }\n`;
      }

      if (listar) {
        console.log("==================".green);
        console.log(colors.blue(`    Tabla del ${base}`));
        console.log("==================".green);
        console.log(consola);
      }

      fs.writeFileSync(`./salida/${nombreArchivo}`, salida);
      resolve(nombreArchivo);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  crearArchivo: crearArchivo,
};
