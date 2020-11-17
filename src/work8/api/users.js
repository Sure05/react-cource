const { Router } = require('express');
const fs = require('fs');
const userValidator = require('../middlewares/user-validator');

const userRouter = Router();

// CRUD

userRouter.get('/', (req, res) => {
    const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
    res.json(users);
  });

userRouter.post('/', userValidator, (req, res) => {
    const newUser = req.body;
    const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
    if (users.some(user => user.email === newUser.email)) {
      return res.status(400).send({
        error: 'User exists!'
      })
    }
    newUser.id = Date.now();
    users.push(newUser);
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.status(201).send({ created_user_id: newUser.id });
  });

userRouter.get('/:userId', (req, res) => {
  const userId = +req.params.userId;
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  const user = users.find(user => user.id === userId);
  if (!user) {
    res.status(404).send({ error: 'User not found!' });
    return;
  }
  res.send(user);
});

userRouter.put('/:userId', userValidator, (req, res) => {
  const newUserData = req.body;
  const userId = +req.params.userId;
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  const updatedUsers = users.map(user => user.id === userId ? {id: userId, ...newUserData} : user);
  fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(updatedUsers));
  res.status(200).send('User has been updated');
});

userRouter.delete('/:userId', (req, res) => {
  const userId = +req.params.userId;
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).send({
      error: 'User not found'
    })
  }
  users.splice(userIndex, 1);
  fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
  res.send('User has been deleted');
});

module.exports = userRouter;
