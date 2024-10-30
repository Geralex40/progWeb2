const express=require("express");
const router=express.Router();//esta funcion nos genera varias rutas de manera automatica
const path=require("path");

//definicion de las rutas y los manejadores
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/bienvenida.html"));
});

router.get("/quienes?",(req,res)=>{
    res.sendFile(path.join(__dirname+"/quienes.html"));
});//por esto los index debe estar en la carpeta de routes

router.get("/contacto",(req,res)=>{
    res.sendFile(path.join(__dirname+"/contacto.html"));
});




module.exports =router;//para que exportar el modulo router