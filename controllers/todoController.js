var dataTest = [ {cont: 'Create todos'}];

module.exports = (app, path) => {

/**READ */
app.get('/todo', (req, res, next) => {
    res.render('todo', {todos: dataTest});
    next();
});


/**CREATE */
app.post('/todo', (req, res, next)=> {
    console.log('Request done via POST');
    dataTest.push(req.body);
    console.log(dataTest);
    res.send('oi');
    next();
});

/**DELETE */
app.delete('/todo/:item', (req, res) => {
    console.log('Request done via DELETE');
    dataTest = dataTest.filter( (element) => {
        return element.cont.replace(/ /g, '-') !== req.params.item;
    });
    res.send('DELETE request');
    console.log(dataTest);
    
});




};