const express = require("express")
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let users = [];

//GET USERS
router.get('/users', (req, res) => {
    res.send(users)
})

//GET USER
router.get('/user/:id', (req, res) => {

    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    if (!user) res.send("User Not Found");
    res.send(user);
})


//POST USER
router.post('/user', (req, res) => {
    const request = req.body;
    users.push({ ...request, id: uuidv4() })

    res.send(`POST USER TO API ${request.name}`);
})
//Delete USER

router.delete('/user/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id)
    res.send(`serId ${id} is deleted.`)
})

//Update USER
router.patch('/user/:id', (req, res) => {
    const { id } = req.params;
    const { name, age } = req.body;
    const user = users.find((user) => user.id === id)
    if (name) {
        user.name = name;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User have id ${id} has been updated.`)


})

module.exports = router;