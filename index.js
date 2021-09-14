const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const mongo = require("mongoose")
const port = 5000;
const router = require("./router/router")


// middelwares
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))
app.use(morgan('dev'))
app.use(express.json())
app.use('/api', router)

// app listen port 
app.listen(port, () => {
    console.log(`app start at ${port}`);
})

// db connect
mongo.connect('mongodb://localhost/newapp', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, () => {
    console.log("db conntect successfully")
})


