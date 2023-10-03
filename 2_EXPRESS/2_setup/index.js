const express = require('express')

const app = express()

app.get('/', (requisicao, resposta) => {
    resposta.send('Eu sou bonito')
})

app.listen(3000, () => {
    console.log('app rodando na porta 3000')
})