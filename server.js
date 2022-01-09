const express = require('express');
const app = express();
const port = 3000;
const routes = require('./index');
const usersRoutes = require('./handlers/users')

app.use('/', routes);
app.use('/users',usersRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});