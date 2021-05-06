const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express()


app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

let items = [];
let workItems = [];

app.get('/',(req,res,next)=>{



    res.render("list",{listTitle:date.getDate(),newItem: items})//list is ejs file inside views folder {key in ejs,value in app.js}
    
});

app.post('/',(req,res,next)=>{
    let item = req.body.newItem;

    if (req.body.list === "Work"){
    workItems.push(item) 
    res.redirect('/work');
}   else {
    items.push(item);
}
    res.redirect('/');
});

app.get('/work',(req,res)=>{
    res.render("list", {listTitle: date.getDay() + ", Work List", newItem: workItems})
});

app.post('/work',(req,res)=>{
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect('/work')
});

app.get('/about',(req,res)=>{
    res.render("about")
});



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Listening to Port:${PORT}`);
});