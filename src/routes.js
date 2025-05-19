import { Router } from "express";

const routes = Router();

//rota de teste, hello world
routes.get("/", (req, res) => {
    return res.send('rota de teste')
})

//rota que retorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req, res) => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "Andre",
                cargo: "dev",
                idade: 37,
                custoPorHora: 120.0,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Adulto",
                cargo: "aluno",
                idade: 17,
                custoPorHora: 10.0,
                temLicenca: true
            },
            {
                id: "3",
                nome: "3K",
                cargo: "caixa do condor",
                idade: 22,
                custoPorHora: 32.70,
                temLicenca: true
            }
        ]
    });
});

routes.get("/withImages", (req, res) => {
    return res.json({
        photos: [
            {
                id: "1",
                nome: "Campo",
                imagem: "https://media.istockphoto.com/id/517188688/pt/foto/paisagem-de-montanha.jpg?s=612x612&w=0&k=20&c=uFGUrUT6gA8FrTWhE10YYzngWPlDLssKxJiDs1Qw2Qs="
            },
            {
                id: "2",
                nome: "Montanha",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UqN7bxmvCnQA84Smi_bMlgqKMYmbE7TzYA&s"
            },
            {
                id: "3",
                nome: "Praia",
                imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDrFQr1LLEHhOgdCd0FroVH6zFJe8sJ-nHSg&s"
            }
        ]
    })
})

export default routes