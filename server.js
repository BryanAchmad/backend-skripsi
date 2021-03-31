const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config');

const prokerRoute = require('./Routes/proker.route');
const pembinaRoute = require('./Routes/pembina.route');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected!')
},
    error => {
        console.log('Could not connect to database : ' + error)
    }
)

const app = express();
var corsOption = {
    origin: "http://localhost:3000"
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOption))

app.use('/prokers', prokerRoute)
app.use('/pembina', pembinaRoute)



app.get("/", (req, res) => {
    res.json({ message: "welcome" })
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`server is running on pors ${PORT}`)
});


app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});