import livros from "../models/Livro.js";

class LivroController {

    static getAllLivros = (req, res) => {
        livros.find()
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    };

    static getLivroById = (req, res) => {
        livros.findById(req.params.id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if (!err) {
                    res.status(200).json(livros);
                } else {
                    res.status(400).send({ message: `${err} - livro com id informado não foi encontrado.` });
                }
            });
    };

    static createLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    };

    static updateLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso!' });
            } else {
                res.status(400).send({ message: `${err.message} - erro ao atualizar livro.` });
            }
        });
    };

    static deleteLivroById = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro removido com sucesso' });
            } else {
                res.status(400).send({ message: err.message });
            }
        });
    };

    static listLivroByEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({ 'editora': editora }, {}, (err, livros) => {
            if(!err){
                res.status(200).json(livros);
            } else {
                res.status(400).send({ message: 'Não foi possível encontrar livros desta editora' });
            }
        });
    };

}

export default LivroController;