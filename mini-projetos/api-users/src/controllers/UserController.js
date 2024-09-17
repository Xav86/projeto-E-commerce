const User = require('../model/User');

class UserController {

    async new(req, res) {
        const {name, email, password, date} = req.body;
        try {

            const result = await User.findByEmail(email);

            if (result.status) {
                res.status(403).json({msg: 'usuário já cadastrado com este email'});
                return;
            }

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
                res.status(200).json({msg: result.data});
                return;
            } else {
                res.status(404).json({msg: result.msg});
                return;
            }

        } catch(error) {
            console.error('Erro ao buscar usuário por ID: ', error);
            res.status(500).json({error: 'Erro interno ao buscar usuário'});
        }
    }

    async deleteUser(req, res) {
        const { id } = req.params;

        try {
            const result = await User.delete(id);

            if (result.status) {
                res.status(200).json({msg: result.msg});
                return;
            } else {
                res.status(404).json({msg: result.msg});
                return;
            }

            
        } catch(error) {
            console.error(error);
            res.status(500).json({error: 'Erro interno ao deletar usuário'});
        }
    }

};

module.exports = new UserController;