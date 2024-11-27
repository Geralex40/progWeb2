const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//const {ifError} = require ('assert');

/*instanciar*/ 
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
//analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET

//configurar los archivos estaticos para el css
const path = require('path');
app.use(express.static(path.join(__dirname, 'estilos')));

//motor de plantillas para html de forma dinamica
app.set('view engine', 'ejs');

//creedenciales para DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: '3308'
});

//conexion a la DB
db.connect(err=>{
    if(err){
        console.log(`Error al momento de hacer conexion BB :3 ${err}`);
    }else{
        console.log(`Conexion realizada :3`);
    }
});
/*Puerto*/
const port = 3036; 
const hostName= '127.0.0.1';
//server inicio
app.listen(port,hostName,()=>{
    console.log(`El server esta en escucha desde http://${hostName}:${port}`);
});

//Mostrar lista de usuarios
app.get('/',(req,res)=>{
    //Consulta  a la base de datos
    const query = 'SELECT * FROM users';
    // trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos -> Codigo de error:${err}`);
            res.send('Error en recuperar datos');
        }else{
            res.render('index',{users:results});
        }

    });    

});


//agregar usuario
app.get('/adduser',(req,res)=>{
    
    res.render('agregar');
});

app.post('/add',(req,res)=>{
    const {name,email} = req.body;
    const query = 'INSERT INTO users (nombre, correo)VALUE (?,?)';
    db.query(query,[name,email],(err)=>{
        if(err){
            console.error(`Error al insertar usuarios: Codigo-> ${err}`);
            res.send('Error');
        }else{
             res.redirect('/');   
        }
    });
});

//editar usuario
app.get('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query,[id],(err,results)=>{
        if(err){
            console.error('Error en la DB');
            res.send("Error en la DB ");
        }else{
            res.render('edit',{user:results[0]});

        }
    }); 
});

app.post('/editar',(req,res)=>{
    const {name,email,id} = req.body;
    const query = 'UPDATE users SET nombre = ?, correo=? WHERE id=?;';
    db.query(query,[name,email,id],(err)=>{
        if(err){
            console.error('Error en la DB');
            res.send("Error en la DB ");
        }else{
            res.redirect('/');   

        }
    }); 
});


//eliminar
app.get('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query,[id],(err)=>{
        if(err){
            console.error('Error en el Delete');
            res.send("error al eliminar");
        }else{
            res.redirect('/');
        }
    });
});
