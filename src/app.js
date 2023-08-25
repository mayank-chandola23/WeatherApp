const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const hbs = require('hbs');

// public static path
const staticPath = path.join(__dirname, '../public')
const templatePath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partials')


app.set('view engine', 'hbs')
app.set('views', templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

// routing
app.get('/', (req, res)=>{
    res.render("index.hbs");
});

app.get('/about', (req, res)=>{
    res.render("about.hbs");
});

app.get('/weather', (req, res)=>{
    res.render("weather.hbs");
});

app.get('*', (req, res)=>{
    res.render("404error.hbs", {
        errorMsg : "OOps! Page Not Found"
    })
});
app.listen(port, ()=>{
    console.log(`running ${port}`);
})