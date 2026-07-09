const express = require('express') //importando o express
const app = express() //aplicação do express

const exphbs = require('express-handlebars') // importando o handlebars
app.engine('handlebars', exphbs.engine({defaultLayout: false})) //registra como o Express vai processar arquivos .handlebars
app.set('view engine', 'handlebars') //define que a extensão padrão das views será .handlebars

app.use(express.urlencoded({extended:true})) //essa linha faz o Express ler dados enviados por formulário HTML.

app.get('/', (req,res) => {
    res.redirect('/home')
})

app.get('/home', (req,res) => {
    res.render('home')
})

app.get('/alunos', (req,res) => {
    res.render('alunos')
})

app.get('/alunos/create', (req,res) => {
    res.render('cadastrarAlunos')
})

app.get('/alunos/edit', (req,res) => {
    res.render('editarAlunos')
})

app.listen(3000, () => {
    console.log('Servidor em execução em http://localhost:3000')
})