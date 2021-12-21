const express = require('express');
const router = express.Router();
const indexController = require(../controllers/indexController.js);
const {check} = require('express-validator');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/',[
  check('name').isLength({min: 1}).withMessage('Se requiere el nombre'), 
  check('email').isEmail().withMessage('Se requiere un email'),
  check('color').isLength({min: 1}).withMessage('Se requiere un color'),
  //validando con custom de acuerdo a la sintaxis de la libreria
  // que recibe un callback con un if y un else
  body('age').custom(value => {
    if(isNav(value)){
      throw new Error('La edad debe ser un numero');
    } else{
      return true;
    }
  })
], indexController.index )

module.exports = router;
