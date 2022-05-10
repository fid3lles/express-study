import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.getAllLivros)
    .get("/livros/busca", LivroController.listLivroByEditora)
    .get("/livros/:id", LivroController.getLivroById)
    .post("/livros", LivroController.createLivro)
    .put("/livros/:id", LivroController.updateLivro);
    //.delete("/livros/:id",  LivroController.deleteLivroByid);

    //delete não está funcionando, erro de callback
export default router;