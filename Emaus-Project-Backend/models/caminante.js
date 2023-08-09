const {Schema, model} = require('mongoose')

const CaminanteSchema = Schema({

    nombre:{
        type:String,
        required:true
    },
    cedula:{
        type:String,
        required:true,
        unique:true
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

CaminanteSchema.method('toJSON', function(){
  const {__v, _id, password, ...object} = this.toObject()
    object.uid = _id
  return object
})

module.exports = model('Caminante', CaminanteSchema)