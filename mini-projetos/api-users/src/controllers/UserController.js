const User = require('../model/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class UserController {

    async new(req, res) {
        const {name, email, password, date_nasc} = req.body;

        if (!name || !email || !password || !date_nasc) {
            res.status(400).json({error: 'Dados incompletos, favor preencher todos os dados corretamente'});
            return;
        }

        try {

            const result = await User.findByEmail(email);

            if (result.status) {
                res.status(403).json({error: 'usuário já cadastrado com este email'});
                return;
            }

            await User.create(name, email, password, date_nasc);

            res.status(200).json({msg: 'Usuário criado com sucesso!'});
            return;
        } catch(error) {
            console.error('Erro ao cadastrar usuário: ', error);
            res.status(500).json({error: 'Erro interno ao inserir um usuário'});
            return;
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
            return;
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
            return;
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
                res.status(404).json({error: result.msg});
                return;
            }

            
        } catch(error) {
            console.error(error);
            res.status(500).json({error: 'Erro interno ao deletar usuário'});
            return;
        }
    }

    async editUser(req, res) {
        const { id, name, email, date_nasc, role } = req.body;

        if (!id) {
            res.status(400).json({error: "necessário fornecer id"});
            return;
        }

        try {
            const result = await User.findById(id);

            if (!result.status) {
                res.status(404).json({error: 'Usuário não existe ou id fornecido incorretamente'});
                return;
            }
        } catch(error) {
            console.error(error);
            res.status(500).json({error: 'Erro ao validar id para alteração'});
            return;
        }

        const data = {
            id: id,
            name: name,
            email: email,
            date_nasc: date_nasc ? new Date(date_nasc) : undefined,
            role: role 
        }

        try {
            const result = await User.update(data);

            if (!result.status) {
                res.status(400).json({error: result.error});
                return;
            } else {
                res.status(200).json({msg: result.msg});
                return;
            }

        } catch(error) {
            console.error('Error ao editar usuário: ', error);
            res.status(500).json({error: 'Error ao editar o usuário'});
            return;
        }

    }

    async editPasswordUser(req, res) {
        const { id, newPassword, email, password } = req.body // id = id do usuário a ser alterado + nova senha e email + password é do usuario ADM que tem que autorizar a troca.

        try {
            const result = await User.findLogin(email, password);

            if (!result.status) {
                res.status(400).json({error: result.error});
                return;
            }

            if (result.data.ROLE !== 1) { //nivel 1 === adm
                res.status(401).json({error: 'Nivel de acesso insuficiente'});
                return;
            } 

        } catch(error) {
            console.error('Erro ao confirmar credenciais do usuário administrado: ', error);
            res.status(500).json({error: 'Erro ao confirmar credenciais do usuário administrado'});
            return;
        }
        
        try {
            const result = await User.newPassword(id, newPassword);

            if (!result.status) {
                res.status(400).json({error: result.error});
                return;
            }

            res.status(200).json({msg: 'Senha alterada com sucesso'});
            return;
        } catch(error) {
            console.error('Erro ao editar senha do usuário: ', error);
            res.status(500).json({error: 'Error ao editar senha do usuário'});
            return;
        }
    }

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const result = await User.findLogin(email, password);

            if (!result.status) {
                res.status(400).json({error: result.error});
                return;
            }
            
            const token = jwt.sign({ id: result.data.ID_USER, email: result.data.EMAIL, role: result.data.ROLE }, process.env.TEMPERO);

            res.status(200).json({msg: 'logado!', token: token});

        } catch(error) {
            console.error('Erro ao tentar realizar login ', error);
            res.status(500).json({error: 'Error ao realizar login'});
            return;
        }
    }

};

module.exports = new UserController;