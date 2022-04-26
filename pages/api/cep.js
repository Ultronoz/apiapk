// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { rastrearEncomendas } = require('correios-brasil');
const { consultarCep,  calcularPrecoPrazo  } = require('correios-brasil');

export default function handler(req, res) {
  function apiCep(cep){
  consultarCep(cep).then((response => {
    return response
  })).then(data => {
  res.json(data)
})
}
apiCep(req.query.cep)
}
