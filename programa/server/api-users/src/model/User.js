/* table USERS */
const knexInstance = require('../database/database');
const bcrypt = require('bcrypt');

class User {
    async create(name, email, password, date_nasc) {

        if (typeof password !== 'string') {
            throw new Error('A senha deve ser uma string');
        }

        const hash = await bcrypt.hash(password, 10);

        const data = {
            NAME: name,
            EMAIL: email,
            PASSWORD: hash,
            DATA_NASCIMENTO: new Date(date_nasc)
        }

        try {
            await knexInstance.insert(data)
                .into('USERS');

            return;

        } catch(error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const result = await knexInstance.select('ID_USER', 'NAME', 'EMAIL','DATA_NASCIMENTO', 'ROLE')
                .from('USERS');

            return result;

        } catch(error) {
            throw error;
        }
    }

    async findById(id) {
        if (!id || isNaN(id)) {
            throw new Error('dado passado invalido');
        }

        try {

            const result = await knexInstance.select('ID_USER', 'NAME', 'EMAIL','DATA_NASCIMENTO', 'ROLE')
                .from('USERS')
                .where({ID_USER: id})
                .first();

            if (!result) {
                return {status: false, msg: 'Nenhum usuário encontrado'};
            }

            return {status: true, data: result};

        } catch(error) {
            throw error
        }
    }

    async findByEmail(email) {
        try {
            const result = await knexInstance.select()
                .from('USERS')
                .where({EMAIL: email})
                .first();

            if (!result) {
                return {status: false, msg: 'Nenhum usuário encontrado'};
            }

            return {status: true, data: result};

        } catch(error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await this.findById(id);

            if (response.status) {
                await knexInstance.delete()
                    .table('USERS')
                    .where({ID_USER: id});
                
                return {status: true, msg: 'Usuário deletado'};

            } else {

                return {status: false, msg: 'Usuário não existente, não sendo possivel deletalo'};
            }

        } catch(error) {
            throw error;
        }
    }

    async update(data) {
        
        if (!data) {
            return {status: false, error: 'Os dados de alteração não podem ser nulos'};
        }

        if (!data.id) {
            return {status: false, error: 'ID é necessário para a atualização'};
        }
        
        let user;
        try {
            user = await this.findById(data.id);
        } catch(error) {
            return {status: false, error: 'Erro ao consultar usuário atual para alteração'};
        }

        let updateData = {
            NAME: data.name || user.data.NAME, 
            EMAIL: user.data.EMAIL,
            DATA_NASCIMENTO: data.date_nasc || user.data.DATA_NASCIMENTO,
            ROLE: data.role || user.data.ROLE
        };
        
        if (data.email) {
            if (user.EMAIL !== data.email) { // se o email é igual n tem pq tentar mudar
                const result = await this.findByEmail(data.email);
                if(result.status) { // se o email existir n deixa passa
                    return {status: false, error: 'Email já esta cadastrado'};
                } else {
                    updateData.EMAIL = data.email;
                }
            }
        }

        try {
            await knexInstance.update(updateData)
                .table('USERS')
                .where({ID_USER: data.id});

            return {status: true, msg: 'Usuário alterado com sucesso'};

        } catch(error) {
            throw error;
        }
    }

    async newPassword(id, newPassword) {

        if (!id || !newPassword) {
            return {status: false, error: 'Necessário Id e senha a ser alterada'};
        }

        const user = await this.findById(id);

        if (!user.status) {
            return {status: false, error: 'Usuário inexistente'};
        }

        let hash;
        try {
            hash = await bcrypt.hash(newPassword, 10);

            await knexInstance.update({PASSWORD: hash})
                .table('USERS')
                .where({ID_USER: id});

            return {status: true, msg: 'Senha alterada com sucesso'};

        } catch(error) {
            throw error;
        }
    }

    async findLogin(email, password) {
        
        if (!email  || !password) {
            return {status: false, error: 'Credenciais necessárias autenticar não preenchidas'};
        }

        try {
            const result = await this.findByEmail(email);

            if(!result.status) {
                return {status: false, error: 'Email e/ou senha inválidos'};
            }

            const passwordMatch = await bcrypt.compare(password, result.data.PASSWORD);

            if (!passwordMatch) {
                return {status: false, error: 'Email e/ou senha inválidos'};
            }

            return {status: true, data: result.data};

        } catch(error) {
            throw error;
        }
    }

};

module.exports = new User;