const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const request = require('request');


var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' , 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/' , (req , res ) =>{
  res.render('home.hbs' , {
  });
});

app.post('/',(req , res)=>{
  trainno = req.body.trainno;
  console.log(req.body)
  res.send('GOOD JOB ')
});

app.listen(process.env.PORT || 3000 , ()=>{
  console.log('server is up on port 3000');
});
