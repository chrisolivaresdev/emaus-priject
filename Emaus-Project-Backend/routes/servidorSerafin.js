const {Router} = require('express')
const {check} = require('express-validator')
const {getServidor, newServidor, getServidorById, actualizarServidor, eliminarServidor, getByIdRetiro}= require('../controllers/servidorSerafin')
const {validarCampos}= require('../middlewares/validar-campos')
const { ValidarJWT } = require('../middlewares/validar-jsw')

const router = Router()

router.get('/', ValidarJWT, getServidor);

router.get('/:id', ValidarJWT, getServidorById);


router.get('/retiro/:id', ValidarJWT, getByIdRetiro);

router.post('/',
[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('cedula','La cedula es obligatorio').not().isEmpty(),
    check('fecha_nac','La fecha de inicio es obligatorio').not().isEmpty(),
    check('estado_civ','El estado civil es obligatorio').not().isEmpty(),
    check('direccion','La dirección es obligatorio').not().isEmpty(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('estatura','La estatura es obligatorio').not().isEmpty(),
    check('peso','El peso es obligatorio').not().isEmpty(),
    check('nombre_fam','El nombre del familiar es obligatorio').not().isEmpty(),
    check('telefono_fam','El telefono del familiar es obligatorio').not().isEmpty(),
    check('antecedentes_med','los antecedentes medicos es obligatorio').not().isEmpty(),
    check('tratamiento','Los tratamientos son obligatorio').not().isEmpty(),
    check('alergia','Saber si es alergico es obligatorio').not().isEmpty(),
    check('aporte_eco','El aporte economico es obligatorio').not().isEmpty(),
    check('notas','Tener notas es obligatorio').not().isEmpty(),
    validarCampos
]
, newServidor);

router.put('/:id',[
    ValidarJWT,
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('cedula','La cedula es obligatorio').not().isEmpty(),
    check('fecha_nac','La fecha de inicio es obligatorio').not().isEmpty(),
    check('estado_civ','El estado civil es obligatorio').not().isEmpty(),
    check('direccion','La dirección es obligatorio').not().isEmpty(),
    check('telefono','El telefono es obligatorio').not().isEmpty(),
    check('estatura','La estatura es obligatorio').not().isEmpty(),
    check('peso','El peso es obligatorio').not().isEmpty(),
    check('nombre_fam','El nombre del familiar es obligatorio').not().isEmpty(),
    check('telefono_fam','El telefono del familiar es obligatorio').not().isEmpty(),
    check('antecedentes_med','los antecedentes medicos es obligatorio').not().isEmpty(),
    check('tratamiento','Los tratamientos son obligatorio').not().isEmpty(),
    check('alergia','Saber si es alergico es obligatorio').not().isEmpty(),
    check('aporte_eco','El aporte economico es obligatorio').not().isEmpty(),
    check('notas','Tener notas es obligatorio').not().isEmpty(),
    validarCampos
], actualizarServidor);

router.delete('/:id',ValidarJWT, eliminarServidor);

module.exports = router