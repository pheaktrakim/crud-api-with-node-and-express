require('dotenv').config()
const express = require('express')
const body = require('body-parser')
const testRoute = require("./routers/user.js")
const app = express();

app.use(body.json());


app.get('/', (req, res) => {
    res.send(process.env.HELLO)
});

app.use('/dashboard', testRoute)

app.use('/dashboard', testRoute)


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App running on port: ${port}`))
