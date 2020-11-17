const { Router } = require('express');
const KEY = '6179edc935054fb28730e15d2378f021';


const weatherRouter = Router();

// CRUD

weatherRouter.get('/', (req, res) => {
    const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
    res.json(users);
});