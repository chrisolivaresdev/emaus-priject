const {Router} = require('express')
const expressfileUpload = require('express-fileupload');
const { ValidarJWT } = require('../middlewares/validar-jsw')
const { fileUpload, getImage } = require('../controllers/uploads')

const router = Router()


router.use(expressfileUpload())

router.get('/:tipo/:photo', [
    ValidarJWT
] , getImage);

router.put('/:tipo/:id', [
    ValidarJWT
] , fileUpload);

module.exports = router