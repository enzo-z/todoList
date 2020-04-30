const mongoose = require("mongoose");


const TodoSchema = new mongoose.Schema({
    cont: {
        type: String,
    }
});

const TodoModel = mongoose.model("TodoModel", TodoSchema);

module.exports = TodoModel;