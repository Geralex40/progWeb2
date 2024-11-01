const express= require("express");//importamos expres
const pagesRutes=require("./routes/pages")//importamos nuestra ruta
const path=require("path");

const app=express();
const PORT=3059;

//la carpeta estatica sera publica donde tendre html, js puro, etc
app.use(express.static(`public`));//estatico es que sean unicamente visuales, no se pueda modificar en el codigo cargado en el servidor, solo se modifica localmente en el dispositivo

app.use('/',pagesRutes);
app.get('/',(req,res)=>{
    res.redirect('/page1');
});

app.listen(PORT,()=>{
    console.log(`Escuchando desde http://127.0.0.1:${PORT}`)
});
