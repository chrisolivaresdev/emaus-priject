const {Router} = require('express')
const {check} = require('express-validator')
const {getRetiro, newRetiro, actualizarRetiro, eliminarRetiro, getRetiroById}= require('../controllers/retiroSerafin')
const {validarCampos}= require('../middlewares/validar-campos')
const { ValidarJWT } = require('../middlewares/validar-jsw')

const router = Router()

router.get('/', ValidarJWT, getRetiro);

router.get('/:id', ValidarJWT, getRetiroById);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('casa_ret','La casa de retiro es obligatorio').not().isEmpty(),
    check('fecha_ini','La fecha de inicio es obligatorio').not().isEmpty(),
    check('fecha_cul','La fecha de culminacion es obligatorio').not().isEmpty(),
    validarCampos
]
, newRetiro);

router.put('/:id',[
    ValidarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('casa_ret','La casa de retiro es obligatorio').not().isEmpty(),
    check('fecha_ini','La fecha de inicio es obligatorio').not().isEmpty(),
    check('fecha_cul','La fecha de culminacion es obligatorio').not().isEmpty(),
    validarCampos
], actualizarRetiro);

router.delete('/:id',ValidarJWT, eliminarRetiro);

module.exports = router