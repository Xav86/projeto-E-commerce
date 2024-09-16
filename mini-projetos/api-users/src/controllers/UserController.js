const User = require('../model/User');

class UserController {

    async new(req, res) {
        const {name, email, password, date} = req.body;
        try {
            await User.create(name, email, password, date);

            res.status(200).json({msg: 'Usuário criado com sucesso!'});
        } catch(error) {
            console.log('Erro', error)
            res.status(500).json({error: 'Erro interno ao inserir um usuário'})
        }
    }

};

module.exports = new UserController;