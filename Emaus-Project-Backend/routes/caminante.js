const {Router} = require('express')
const {check} = require('express-validator')
const {getCaminante, newCaminante, actualizarCaminante, getCaminanteById, eliminarCaminante, getByIdRetiro}= require('../controllers/caminante')
const {validarCampos}= require('../middlewares/validar-campos')
const { ValidarJWT } = require('../middlewares/validar-jsw')

const router = Router()

router.get('/', ValidarJWT, getCaminante);

router.get('/:id', ValidarJWT, getCaminanteById);

router.get('/retiro/:id', ValidarJWT, getByIdRetiro);

router.post('/',
[   
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
    check('postulante','El postulante es obligatorio').not().isEmpty(),
    check('notas','Tener notas es obligatorio').not().isEmpty(),
    validarCampos
]
, newCaminante);

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
    check('postulante','El postulante es obligatorio').not().isEmpty(),
    check('notas','Tener notas es obligatorio').not().isEmpty(),
    validarCampos
], actualizarCaminante);

router.delete('/:id',ValidarJWT, eliminarCaminante);

module.exports = router