const express=require('express')
const handlebars=require('express-handlebars')
const port=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('.hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static('./public'));

app.get('/',(req,res)=>res.render('home/index'))

app.get('/articles',(req,res)=>{
    res.render('articles/index')
})

app.get('/articles/create',(req,res)=>{
    res.render('articles/create')
})

app.post('/articles/create',(req,res)=>{
console.log(req.body)
})

app.listen(port,()=>console.log(`Server is on port ${port}`))