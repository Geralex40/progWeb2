//aqui va la logica de hacia donde van las paginas
const express=require('express');
const path=require('path');//path viene de node
const router=express.Router();

//la 1ra ruta para la pagina
router.get('/page1',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public','/page1.html'))//path nos pone automaticamente la ruta, asi se cambie o se cambie el dispositivo
});//que cache esta informacion

//ruta calculadora
router.get('/page2',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../15102024','/index.html'))
});

//ruta qr
router.get('/page3',(req,res)=>{
    res.sendFile(path.join(__dirname,'../../15102024','/generadorQr.html'))
});

//exportar eel router para usarlo en la pag principal
module.exports=router;