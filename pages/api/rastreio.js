const { rastrearEncomendas } = require('correios-brasil');
const { consultarCep,  calcularPrecoPrazo  } = require('correios-brasil');

export default function handler(req, res) {
  function apiRastreio(rast){
  let codRastreio = ['${rast}']; // array de códigos de rastreios

  rastrearEncomendas(codRastreio).then((response) => {
  console.log(response);

}).then(data => {
  res.json(data)
})
}
apiRastreio(req.query.rast)
}
