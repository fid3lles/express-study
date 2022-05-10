import autores from "../models/Autor.js";

class AutoresController {

    static getAllAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        });
    };

    static getAutorById = (req, res) => {
        autores.findById(req.params.id, (err, autores) => {
            if (!err) {
                res.status(200).json(autores);
            } else {
                res.status(400).send({ message: `${err} - autor com id informado não foi encontrado.` });
            }
        });
    };

    static createAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao cadastrar autor.` });
            } else {
                res.status(201).send(autor.toJSON());
            }
        });
    };

    static updateAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor atualizado com sucesso!' });
            } else {
                res.status(500).send({ message: `${err.message} - erro ao atualizar autor.` });
            }
        });
    };

    static deleteAutorById = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Autor removido com sucesso' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

}

export default AutoresController;