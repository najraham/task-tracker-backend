const express = require('express')
const mongoose = require('mongoose')

const app = express()

// CORS 
const cors = require('./middlewares/cors');
app.use(cors);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// database
const url = 'mongodb://localhost/TaskTracker'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
const con = mongoose.connection
con.on('open', () => {
    console.log('DB connected')
})

app.use('/api', require('./routes/task'))

app.listen(5000, () => console.log("Server started on port 5000"))