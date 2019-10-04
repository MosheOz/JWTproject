const express = require("express");
const bodyParser = require("body-parser");
const api = require('./routes/api');
const cors = require("cors");

const PORT = 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', api);

app.get('/', (req, res) => {
    res.send("Hello World");
})
app.listen(PORT, () => {
    console.log("we're listening to node on port: ", PORT);
})