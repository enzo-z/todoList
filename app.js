const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();
const port = 1234;


app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**View */
app.set('views', __dirname+'/views/');
app.set('view engine', 'ejs');

/**Static files */
app.use("/",express.static('./public'));

/**Todo Controller */
todoController(app, __dirname);


app.listen(port, '127.0.0.1', () =>{
    console.log('Listening to port:'+port) 
});