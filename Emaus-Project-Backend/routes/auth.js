const {Router} = require('express')
const { check } = require('express-validator')
const { login, validarJswToken } = require('../controllers/auth')
const {validarCampos}= require('../middlewares/validar-campos')
const {ValidarJWT} = require('../middlewares/validar-jsw')

const router = Router()

router.post('/', [
    check('email','El email es obligatorio').not().isEmpty(),
    check('email','Debe ser un email valido').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
], login)

router.get('/renew', ValidarJWT , validarJswToken);

module.exports = router