const TodoModel = require("../models/Todo");
var dataTest = [ {cont: 'Create todos'}];

module.exports = (app) => {

/**READ */
app.get('/todo', (req, res, next) => {
    res.render('todo', {todos: dataTest});
});


/**CREATE */
app.post('/todo', async(req, res, next)=> {
    console.log('Request done via POST');
    let newTodo = new TodoModel(req.body);
    await newTodo.save();
    dataTest.push(req.body);
    console.log(dataTest);
    res.send('oi');
});

/**DELETE */
app.delete('/todo/:item', (req, res, next) => {
    console.log('Request done via DELETE');
    dataTest = dataTest.filter( (element) => {
        return element.cont.replace(/ /g, '-') !== req.params.item;
    });
    res.send('DELETE request');
    console.log(dataTest);
    
});

app.use("/", (req, res) => {
    res.status(404).send("This URL doesn't exist! IT'S /todo");
});


};