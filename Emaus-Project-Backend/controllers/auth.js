const {response} = require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')
const {generarJWT} = require('../helpers/jwt')

const login = async (req, resp = response) =>{

    const {email, password} = req.body;

    try {

        const usuarioDB = await Usuario.findOne({email})

        //Verificar Email

        if(!usuarioDB){
            return resp.status(404).json({
                ok:false,
                msg: "El email no existe"
            })
        }

        //Verificar contraseña

        const validPassword = await bcrypt.compareSync(password, usuarioDB.password)

        if(!validPassword) {
        return resp.status(400).json({
            ok:false,
            msg: "Contraseña incorrecta"
        })
    }
      
        //Generar el token - JWT

        const token = await generarJWT(usuarioDB._id)


        resp.json({
            ok:true,
            token,
            email: usuarioDB.email,
            name: usuarioDB.name,
            role: usuarioDB.role
        })

    
    } catch (error) {
        console.log(error)
        resp.status(500).json({
            ok:false,
            msg:"Hable con el administrador"
        })
    }
}

const validarJswToken = async(req, res = response ) => {

    const { uid} = req;
    const usuarioDB = await Usuario.findById(uid)
    console.log(usuarioDB)
    // Generar el JWT
    const token = await generarJWT( uid);

    return res.json({
        ok: true,
        token,
        email: usuarioDB.email,
        name: usuarioDB.name,
        role: usuarioDB.role
    });

}

module.exports = {login, validarJswToken}