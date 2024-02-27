const Servidor = require('../models/servidorSemillita');
const Retiro = require('../models/retiroSemillita');
const {response} =require('express')

const getServidor = async(req, resp = response)=>{

    try {

        const [servidor] =  await Promise.all([
            Servidor.find(),
        ])
    
        resp.json({
            ok: true,
            servidor
        })
        
    } catch (error) {

        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
        
    }

}

const getServidorById = async(req, resp = response)=>{

    try {

    const {id} = req.params

    const [servidor] =  await Promise.all([
        Servidor.find({_id:id}),
    ])

    resp.json({
        ok: true,
        servidor:servidor[0]
    })
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
    }

    
}

const getByIdRetiro = async(req, resp = response)=>{

    try {
        const {id}= req.params
    
    const [servidor] =  await Promise.all([
        Servidor.find({retiro : id}),
    ])

    resp.json({
        ok: true,
        servidor
    })
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
    }
    
}

const newServidor = async (req, resp = response)=>{
    const {retiro} = req.body
    
        //verificacion de q ya exista un caminante con esa cedula
    // const exisServidor = await Servidor.findOne({cedula})

    try {
   
    // if(exisServidor){
    
    //     return   resp.status(400).json({
    //         ok:false,
    //         msg:'Ya hay un servidor registrado con ese cedula'
    
    //     })
    // }   

    const servidor = new Servidor(req.body)
    const _Retiro = await Retiro.findOne({_id: retiro})

    if(!_Retiro){
    
        return resp.status(400).json({
            ok:false,
            msg:'No existe un retiro con ese id'
    
        })
    }   
    //Guardar Servidor
    await servidor.save()



    resp.json({
        ok: true,
        servidor
    })
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
    }
}

const actualizarServidor = async( req, resp) => {
        
    const uid = req.params.id

    //verificacion de q ya exista un caminante con esa cedula
    //  const {cedula} = req.body

    try {
        const ServidorDB = await Servidor.findById(uid)
        
        if(!ServidorDB){
            return  resp.status(404).json({
                ok:false,
                msg:'No existe un servidor con ese id'
            })
        }
        
    //verificacion de q ya exista un caminante con esa cedula
    // const exisCedServidor = await Servidor.findOne({cedula})
    // if(exisCedServidor){
    
    //     return   resp.status(400).json({
    //         ok:false,
    //         msg:'Ya hay un servidor registrado con ese cedula'
    //     })
    // }   

    //Actualizaciones

    const ServidorActualizado = await Servidor.findByIdAndUpdate(uid, req.body, {new: true})

        resp.json({
        ok:true,
        Servidor:ServidorActualizado
        })  


        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok:'false',
            msg:"Error inesperado"
        })
    }
}

const eliminarServidor = async(req, resp = response)=> {
    const uid = req.params.id

    try {

        const ServidorDB = await Servidor.findById(uid)
        
        if(!ServidorDB){
            return  resp.status(404).json({
                ok:false,
                msg:'No existe un servidor por ese id'
            })
        }

        await Servidor.findByIdAndDelete(uid)

        resp.json({
            ok:true,
            msg: 'Servidor eliminado'
            })  

        
    } catch (error) {
        resp.json({
            ok:true,
            msg:"Error inesperado"
            })      
    } 
}

module.exports = {getServidor,getByIdRetiro, newServidor, getServidorById, actualizarServidor, eliminarServidor}