
module.exports = (req, res, next) => {
  const user = req.body;
  if (user.email && user.first_name && user.last_name) {
    return next();
  }
  res.status(400).send({
    error: 'Missing required arguments'
  })
};
