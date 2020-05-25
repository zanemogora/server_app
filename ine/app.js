const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//routing
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(request, response){
    return response.redirect('/form-with-get');
});

app.get('/form-with-get', function(request, response){
    return response.render('form-with-get');
});

app.get('/form-with-post', function(request, response){
    return response.render('form-with-post');
});

app.get('/submit-form-with-get', function(request, response){
  return response.send(request.query);
});

//vytvorenie servera
app.listen(3000, function (){
  console.log('Server bezi na porte 3000')
});
