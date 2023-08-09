const path = require("path")
const fs = require("fs")

const { response } = require("express");
const { v4 } = require('uuid');
const {actualizarImg} = require('../helpers/actualizarImg')


const fileUpload = ( req, resp = response ) => {

    const tipo = req.params.tipo
    const id = req.params.id
    
    const tiposValidos = ['caminante', 'servidor',]

    if(!tiposValidos.includes(tipo)) resp.status(400).json({ok:false,msg:'El tipo no existe(caminante, servidor)'})

    if (!req.files || Object.keys(req.files).length === 0) {
        return resp.status(400).json({ok:false,msg:'No hay ningun archivo'})
    }

    const file = req.files.image
    const nameCort = file.name.split('.')
    const extension = nameCort[nameCort.length - 1]

    const extensionValids = [ 'png', 'jpg', 'jpeg' ]

    if(!extensionValids.includes(extension)){
        return resp.status(400).json({ok:false, msg:'No es una extension de archivo permitida (png, jpg o jpeg)'})
    } 
    
    const nombreArchivo = `${v4()}.${extension}`

    const path = `./uploads/${ tipo }/${nombreArchivo}`

    file.mv(path, (err) => {
        if(err){
            console.log(err)
            return  resp.status(500).json({
                ok:false,
                msg:'Error al mover la imagen'
            })
        }
    })

    actualizarImg(tipo, id, nombreArchivo)

    resp.json({
        ok:true,
        msg:'Archivo subido',
        nombreArchivo
    })
}


const getImage = ( req, resp = response ) => {

    
    const tipo = req.params.tipo
    const photo = req.params.photo

    const pathImg = path.join(__dirname, `../uploads/${tipo}/${photo}`)


    if(!fs.existsSync(pathImg)) {
    const pathImg = path.join(__dirname, `../uploads/user.png`)
    return  resp.sendFile(pathImg)
    }

    resp.sendFile(pathImg)
}

module.exports = {
    fileUpload,
    getImage
}