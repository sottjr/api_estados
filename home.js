const http = require('http');
const listaDeEstados = require('./estados.json')


const app = http.createServer((req, res) => {
    console.log(listaDeEstados);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
    const respostaJson = JSON.stringify(listaDeEstados);
    res.write(respostaJson)

    res.end()
});

app.listen(8000, () => console.log("servidor iniciado na porta 8000"));