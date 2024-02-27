const {Schema, model} = require('mongoose')

const ServidorSemillitaSchema = Schema({

    nombre:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true
    },
    img:{
        type:String,
    },
    fecha_nac:{
        type:String,
        required:true
    },
    estado_civ:{
        type:String,
        required:true,
    },
    direccion:{
        type:String,
        required:true,
    },
    telefono:{
        type: String,
        required:true,
    },
    estatura:{
        type:String,
        required:true,
    },
    peso:{
        type:String,
        required:true,
    },
    nombre_fam:{
        type: String,
        required:true,
    },
    telefono_fam:{
        type:String,
        required:true,
    },
    antecedentes_med:{
        type:String,
        required:true,
    },
    tratamiento:{
        type: String,
        required:true,
    },
    alergia:{
        type:String,
        required:true,
    },
    aporte_eco:{
        type:String,
        required:true,
    },
    notas:{
        type:String,
        required:true,
    },
    retiro:{
        required:true,
        type: Schema.Types.ObjectId,
        ref:'Retiro'
    },
})

ServidorSemillitaSchema.method('toJSON', function(){
  const {__v, ...object} = this.toObject()
  return object
})

module.exports = model('ServidorSemillita', ServidorSemillitaSchema)