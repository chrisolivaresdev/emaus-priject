const {Schema, model} = require('mongoose')

const RetiroSamuelSchema = Schema({

    nombre:{
        type:String,
        required:true
    },
    casa_ret:{
        type:String,
        required:true
    },
    fecha_ini:{
        type:String,
        required:true
    },
    fecha_cul:{
        type:String,
        required:true
    }
})

RetiroSamuelSchema.method('toJSON', function(){
    const {__v, password,  ...object} = this.toObject()
    return object
  })
  
  module.exports = model('RetiroSamuel', RetiroSamuelSchema)







