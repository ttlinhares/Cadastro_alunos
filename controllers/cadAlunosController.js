import alunoModel from "../models/alunoModel.js";

async function index(request, response) {
    const alunos = await alunoModel.findAll();
    response.render("alunos/index", { alunos: alunos })
}

async function create(request, response) {
    response.render("alunos/create");
}

async function storage(request, response) {
    const nota1 = parseFloat(request.body.nota1);
    const nota2 = parseFloat(request.body.nota2);
    var media;
    var situacao;
    console.log(nota1, nota2);
    media = ((parseFloat(nota1) + parseFloat(nota2))) / 2;

    if (media >= 7) {
        situacao = "Aprovado";
    } if (media >= 4 && media < 7) {
        situacao = "Recuperação";
    } if (media < 4) {
        situacao = "Reprovado";
    };

    if(request.body === undefined || request.body.nota1 === undefined || request.body.nota2 === undefined){
        response.send({ message: "Por favor, preencha todos os campos." })
    }

    await alunoModel.create({ ...request.body, media, situacao });

    response.redirect("/");
}

export default { index, create, storage };
