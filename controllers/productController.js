const autos = require("../db/autos.js");
const controller = {
  index: function (req, res) {
    return res.render("listaAutos", { title: "Lista de autos", autos: autos });
  },
  brand: function (req, res) {
    const brand = req.params.brand;
    const result = [];

    for (let i = 0; i < autos.length; i++) {
      if (autos[i].marca.toLowerCase() === brand.toLowerCase()) {
        result.push(autos[i]);
      }
    }
    if (result.length == 0) {
      return res.send("no hay autos encontrados");
    }
    return res.send(result);
  },
  //Creamos el nuevo metodo para color
  color: function (req, res) {
    //Obtener el color desde el parametro
    const color = req.params.color;

    // Crear una lista (array) para almacenar los colores filtrados
    const autosFiltradosPorColor = [];

    // Recorrer la lista de autos, agregando a la lista vacia los autos que matchean
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].color.toLowerCase() === color.toLowerCase()) {
        autosFiltradosPorColor.push(autos[i]);
      }
    }

    // Controlar si se encontraron resultados, sino devolver que no hay autos
    //Lo movimos a la vista listaAutos.ejs
    
    // Devolver la lista filtrada, con res.send.
    return res.render("listaAutos", {
      autos: autosFiltradosPorColor,
      title: "AUTOS POR COLOR",
      color
    });
  },
};

module.exports = controller;
