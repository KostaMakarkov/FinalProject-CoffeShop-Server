

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Final-Project', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true});
