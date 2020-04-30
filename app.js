const mongoose = require("mongoose");
const express = require('express');
const todoController = require('./controllers/todoController');

const app = express();

/**Connecting MongoDB */
mongoose.connect('mongodb://127.0.0.1:27017/learnTodo', {
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const dbConnection = mongoose.connection;

dbConnection.on("open", ()=> {console.log("Connection made with success on mongodb")});
dbConnection.on("error", (error)=> {console.log("Something went wrong:\n"+error)});

const port = 3000;



app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**View */
app.set('views', __dirname+'/views/');
app.set('view engine', 'ejs');

/**Static files */
app.use("/",express.static('./public'));

/**Todo Controller */
todoController(app);


app.listen(port, '127.0.0.1', () =>{
    console.log('Listening to port:'+port) 
});