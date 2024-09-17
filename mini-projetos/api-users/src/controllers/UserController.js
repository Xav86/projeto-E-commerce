const User = require('../model/User');

class UserController {

    async new(req, res) {
        const {name, email, password, date} = req.body;
        try {
            await User.create(name, email, password, date);

            res.status(200).json({msg: 'Usuário criado com sucesso!'});
            return;
        } catch(error) {
            console.error('Erro ao cadastrar usuário: ', error);
            res.status(500).json({error: 'Erro interno ao inserir um usuário'});
        }
    }

    async listUsers(req, res) {
        try {
            const result = await User.findAll();

            res.status(200).json(result);
            return;
        } catch(error) {
            console.error('Erro ao listar usuários: ', error);
            res.status(500).json({error: 'Erro interno ao listar usuários'});
        }
    }

    async findUserById(req, res) {
        const { id } = req.params;

        if (isNaN(id)) {
            res.status(400).json({error: 'Id inserido não é valido'});
            return;
        }

        try {
            const result = await User.findById(id);

            if (result.status) {
                res.status(200).json(result.data);
                return;
            } else {
                res.status(404).json(result.msg);
                return;
            }

        } catch(error) {
            console.error('Erro ao buscar usuário por ID: ',);
            res.status(500).json({error: 'Erro interno ao buscar usuário'});
        }
    }

};

module.exports = new UserController;