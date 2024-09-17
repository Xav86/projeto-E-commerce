const User = require('../model/User');

class UserController {

    async new(req, res) {
        const {name, email, password, date} = req.body;
        try {
            await User.create(name, email, password, date);

            res.status(200).json({msg: 'Usuário criado com sucesso!'});
        } catch(error) {
            console.error('Erro ao cadastrar usuário: ', error);
            res.status(500).json({error: 'Erro interno ao inserir um usuário'});
        }
    }

    async listUsers(req, res) {
        try {
            const result = await User.findAll();

            res.status(200).json(result);
        } catch(error) {
            console.error('Erro ao listar usuários: ', error);
            res.status(500).json({error: 'Erro interno ao listar usuários'});
        }
    }

};

module.exports = new UserController;