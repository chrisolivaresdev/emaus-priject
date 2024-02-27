const {Schema, model} = require('mongoose')

const RetiroSerafinSchema = Schema({

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

RetiroSerafinSchema.method('toJSON', function(){
    const {__v, password,  ...object} = this.toObject()
    return object
  })
  
  module.exports = model('RetiroSerafin', RetiroSerafinSchema)







