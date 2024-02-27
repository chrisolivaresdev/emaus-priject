const Retiro = require('../models/retiroSerafin')
const {response} =require('express')

const getRetiro = async(req, resp = response)=>{
    const [retiro] =  await Promise.all([
    Retiro.find(),
    ])

    resp.json({
        ok: true,
        retiro
    })
}

const getRetiroById = async(req, resp = response)=>{

    const {id} = req.params

    const [retiro] =  await Promise.all([
    Retiro.find({_id:id}),
    ])

    resp.json({
        ok: true,
        retiro:retiro[0]
    })
}


const newRetiro = async (req, resp = response)=>{
    const {nombre} = req.body
    const existRetiro = await Retiro.findOne({nombre})
    try {
   
    if(existRetiro){
    
            resp.status(400).json({
            ok:false,
            msg:'Ya hay un retiro registrado con ese nombre'
    
        })
    }   

    const retiro = new Retiro(req.body)
    
    //Guardar Retiro
    await retiro.save()



    resp.json({
        ok: true,
        retiro
    })
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
    }
}

const actualizarRetiro = async( req, resp) => {
        
    const uid = req.params.id

    try {
    const RetiroDB = await Retiro.findById(uid)

    if(!RetiroDB){
      return  resp.status(404).json({
            ok:false,
            msg:'No existe un Retiro con ese id'
        })
    }

    //Actualizaciones

    const RetiroActualizado = await Retiro.findByIdAndUpdate(uid, req.body, {new: true})

        resp.json({
        ok:true,
        Retiro:RetiroActualizado
        })  


        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok:'false',
            msg:"Error inesperado"
        })
    }
}

const eliminarRetiro = async(req, resp = response)=> {
    const uid = req.params.id

    try {

        const RetiroDB = await Retiro.findById(uid)
        
        if(!RetiroDB){
            return  resp.status(404).json({
                ok:false,
                msg:'No existe un Retiro por ese id'
            })
        }

        await Retiro.findByIdAndDelete(uid)

        resp.json({
            ok:true,
            msg: 'Retiro eliminado'
            })  

        
    } catch (error) {
        console.log(error)
        resp.json({
            ok:true,
            msg: 'Hable con el administrador'
            })      
    }
    
    
}

module.exports = {getRetiro, newRetiro, actualizarRetiro, eliminarRetiro, getRetiroById}