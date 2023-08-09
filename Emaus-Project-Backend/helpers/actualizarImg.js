const fs = require('fs');
const Caminante = require('../models/caminante')
const Servidor = require('../models/servidor')

const borrarImg = (path) => {
    if(fs.existsSync( path )) fs.unlinkSync( path )
}

const actualizarImg = async(tipo, id, nombreArchivo) => {

    let formerImg =''; 
    switch(tipo){
        case 'caminante':
                const caminante = await Caminante.findById(id)
                console.log(caminante)
                if(!caminante){
                    return false
                } 
                formerImg = `./uploads/caminante/${caminante.img}`
                borrarImg(formerImg)
                caminante.img = nombreArchivo
                await caminante.save()
                return true
            break;

        case 'servidor':
            const servidor = await Servidor.findById(id)
            if(!servidor){
                return false
            } 
            formerImg = `./uploads/servidor/${servidor.img}`
            borrarImg(formerImg)
            servidor.img = nombreArchivo
            await servidor.save()
            return true
        break;
 }

}

module.exports = {
    actualizarImg
}