const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());

router
    .route('/')
    .getUsers((req, res) =>{})
    .createUser((req, res) => {});

router
    .route('/:id')
    .getUser((req, res) =>{})
    .deleteUser((req, res) => {});

module.exports = router;