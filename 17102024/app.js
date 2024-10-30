const express=require("express");
const app=express();
const port=3099;

const routes=require("./routes");//variable autodescriptiva

app.use("/",routes);//utilizar todas nuestras rutas importadas

app.listen(port,()=>{
    console.log(`Servidor en escucha desde http://localhost:${port}`)
})
