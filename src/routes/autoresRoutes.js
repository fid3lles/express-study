import express from "express";
import AutoresController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", AutoresController.getAllAutores)
    .get("/autores/:id", AutoresController.getAutorById)
    .post("/autores", AutoresController.createAutor)
    .put("/autores/:id", AutoresController.updateAutor)
    .delete("/autores/:id",  AutoresController.deleteAutorById);

export default router;