const router = express.Router();
const {validationResult} = require('express-validator')

module.exports = {
    index: (req, res) => {
       

        const resultValidation = validationResult(req);

        if(!resultValidation.isEmpty()){  //
            return res.render('index', {
                title: 'El formulario contiene errores',
                errors: resultValidation.errors,
            })
        }
 //obteniendo todas las variables del req por medio de la destructuración
 const { name, color, email, age} = req.body;

 //enviando al usuario una cooki para guardar el color 
if(req.body.remember_color){
    res.cookie('color', color, { maxAge: 60 * 1000});
}

        res.render('index', {name, color, email, age, title: 'un titulo'})
    },
}