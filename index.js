const express = require('express');
const bodyParser = require('body-parser');
let router = express.Router();

router.use(bodyParser.json());

router.get('/hello-world', (req, res) => {
  
    res.json({message: "Hello world"});
  });
  
  //Exo 2
  router.get('/users', (req, res) => {
    
      if(req.query.message.length > 20){
          res.status(400).json({message: "Bad Request"});
      }
    });
  
  //Exo 3
    router.post('/infos/headers', (req, res) => {
      res.send(req.headers);
    });
  
  //Exo4
     router.post('/', async(req, res) =>{
        let birthDateString = req.body.birthdate;
        let today = new Date();
        let dateParts = birthDateString.split("/");
        let birthDate = new Date(+dateParts[2], dateParts[1]-1, +dateParts[0]+1);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if(m < 0 || (m === 0 && today.getDate() < birthDate.getDate())){
          age--;
        }
        if(age >= 18 ){
          res.send(res.status(200).json({message: "Welcome".req.body.firstname}));
        }else{
          res.send(res.status(403).json({message: "Forbidden"}));
        }
     });
  
     //Exo 5
    router.get('/rick-roll', (req, res) => {
      res.redirect('https://youtu.be/dQw4w9WgXcQ');
    });
  
    //Exo 6
    router.delete('/custom-header', (req, res) =>{
      res.set({Message:"Hello world"});
      res.send();
      })
    //Exo 8
    router.get('/params/:id/:key/:slug', (req, res) =>{
        res.json(req.params);
    })
module.exports = router;