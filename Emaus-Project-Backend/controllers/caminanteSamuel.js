const Caminante = require('../models/caminanteSamuel');
const Retiro = require('../models/retiroSamuel');
const {response} =require('express')

const getCaminante = async(req, resp = response)=>{
    const [caminante] =  await Promise.all([
        Caminante.find(),
    ])

    resp.json({
        ok: true,
        caminante
    })
}

const getCaminanteById = async(req, resp = response)=>{

    const {id} = req.params

    const [caminante] =  await Promise.all([
        Caminante.find({_id:id}),
    ])

    resp.json({
        ok: true,
        caminante:caminante[0]
    })
}



const getByIdRetiro = async(req, resp = response)=>{
    const {id}= req.params
    const [caminante] =  await Promise.all([
        Caminante.find({retiro : id}),
    ])

 


    resp.json({
        ok: true,
        caminante
    })
}

const newCaminante = async (req, resp = response)=>{
    const { retiro, cedula} = req.body
    
    //verificacion de q ya exista un caminante con esa cedula
    const exisCaminante = await Caminante.findOne({cedula})

    try {
   
    if(exisCaminante){
    
        return resp.status(400).json({
            ok:false,
            msg:'Ya hay un caminante registrado con esa cedula'
        })
    }   

    const caminante = new Caminante(req.body)
    const _Retiro = await Retiro.findOne({_id: retiro})

    if(!_Retiro){
    
        return resp.status(400).json({
            ok:false,
            msg:'No existe un retiro con ese id'
    
        })
    }   


    //Guardar Caminante
    await caminante.save()



    resp.json({
        ok: true,
        caminante
    })
        
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:'Error inesperado... reivsar logs'
        })
    }
}

const actualizarCaminante = async( req, resp) => {
        
    const uid = req.params.id
    //verificacion de q ya exista un caminante con esa cedula
    const {cedula} = req.body
    

    try {
    const CaminanteDB = await Caminante.findById(uid)
    const existedCedCaminante = await Caminante.findOne({cedula})


    if(!CaminanteDB){
      return  resp.status(404).json({
            ok:false,
            msg:'No existe un caminante con ese id'
        })
    }

        // verificacion de q ya exista un caminante con esa cedula
        
            if(existedCedCaminante && CaminanteDB.cedula !== existedCedCaminante.cedula){
                return resp.status(400).json({
                    ok:false,
                    msg:'Ya hay un caminante registrado con esa cedula'
                })
        }
          

    //Actualizaciones

    const CaminanteActualizado = await Caminante.findByIdAndUpdate(uid, req.body, {new: true})

        resp.json({
        ok:true,
        Caminante:CaminanteActualizado
        })  


        
    } catch (error) {
        console.log(error);
        resp.status(500).json({
            ok:'false',
            msg:"Error inesperado"
        })
    }
}

const eliminarCaminante = async(req, resp = response)=> {
    const uid = req.params.id

    try {

        const CaminanteDB = await Caminante.findById(uid)
        
        if(!CaminanteDB){
            return  resp.status(404).json({
                ok:false,
                msg:'No existe un caminante por ese id'
            })
        }

        await Caminante.findByIdAndDelete(uid)

        resp.json({
            ok:true,
            msg: 'Caminante eliminado'
            })  

        
    } catch (error) {
        resp.json({
            ok:true,
            msg:"Error inesperado"
            })      
    } 
}

module.exports = {getCaminante, getByIdRetiro, getCaminanteById, newCaminante, actualizarCaminante, eliminarCaminante}