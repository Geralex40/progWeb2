const express=require("express");
const path=require("path");

const app =express();

//con los set y get hago atrivutos de un metodo
app.get("/",(req,res)=>{
    //res.send("hola mundo desde Node");
    //res.sendFile("/22102024/index.html")
    res.sendFile(path.join(__dirname+"/index.html"));//para enviarle la ruta donde actualmente estamos parados, gracias a el modulo de path
});

const port=3000;

app.listen(port,()=>{
    console.log(`EL server esta en escucha desde el https://localhost:${port}`)
})