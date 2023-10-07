import express from 'express';
import db from "./db/db.js";
import alunosRoutes from "./Routes/cadAlunosRoutes.js";

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(alunosRoutes);

app.set("view engine","pug");

app.set("views", "./views");

db.sync().then(()=>{
    console.log("Conexão aberta com o banco de dados cadAlunos");
}).then(()=>{
    app.listen(5000,()=>{
        console.log("Server listening in port 5000!")
    })
});


