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

            return

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
};

module.exports = new User;