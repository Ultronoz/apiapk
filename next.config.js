// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: "/app/cep",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "file:///C:/Users/diego/Desktop/teste.html" },
        ],
      },
    ]
  },
}