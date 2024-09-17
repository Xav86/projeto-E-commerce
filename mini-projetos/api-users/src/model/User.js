/* table USERS */
const knexInstance = require('../database/database');
const bcrypt = require('bcrypt');

class User {
    async create(name, email, password, date) {

        if (typeof password !== 'string') {
            throw new Error('A senha deve ser uma string');
        }

        const hash = await bcrypt.hash(password, 10);

        const data = {
            NAME: name,
            EMAIL: email,
            PASSWORD: hash,
            DATA_NASCIMENTO: new Date(date)
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
            const result = await knexInstance.select()
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

            const result = await knexInstance.select()
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
        console.log(data);

        if (!data) {
            throw {status: false, error: 'Os dados de alteração não podem ser nulos'};
        }
        
        let user;
        try {
            user = await this.findById(data.id);
        } catch(error) {
            throw {status: false, error: 'Erro ao consultar usuário atual para alteração'};
        }

        let updateData = {}
        
        if (data.name) {
            updateData.NAME = data.name;
        }
        
        if (data.email) {
            if (user.EMAIL != data.email) { // se o email é igual n tem pq tentar mudar
                const result = await this.findByEmail(data.email);
                if(!result.status) { // se o email existir n deixa passa
                    return {status: false, error: 'Email já esta cadastrado'};
                } else {
                    updateData.EMAIL = data.email;
                }
            }
        }

        if (data.date_nasc) {
            updateData.DATA_NASCIMENTO = data.date_nasc;
        }

        if (data.role) {
            updateData.ROLE = data.role;
        }

        try {
            await knexInstance.update(updateData)
                .where({ID_USER: data.id})
                .table('USERS');

            return {status: true, msg: 'Usuário alterado com sucesso'};
        } catch(error) {
            throw error;
        }
    }
};

module.exports = new User;