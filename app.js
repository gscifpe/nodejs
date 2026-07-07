const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.redirect('/home')
})

app.get('/home', (req,res) => {
    res.send('Página Inicial')
})

app.get('/alunos', (req,res) => {
    res.send('Listar Alunos')
})

app.get('/alunos/create', (req,res) => {
    res.send('Cadastrar novos alunos')
})

app.get('/alunos/edit', (req,res) => {
    res.send('Editar Alunos')
})

app.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000')
})