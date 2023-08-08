const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema({

    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

UsuarioSchema.method('toJSON', function(){
  const {__v, password,  ...object} = this.toObject()
  return object
})

module.exports = model('Usuario', UsuarioSchema)