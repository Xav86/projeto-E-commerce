/* table USERS */
const knexInstance = require('../database/database');

class User {
    async create(name, email, password, date) {

        const data = {
            NAME: name,
            EMAIL: email,
            PASSWORD: password,
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
};

module.exports = new User;