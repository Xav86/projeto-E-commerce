/* table USERS */
const knexInstance = require('../database/database');

class User {
    async create(name, email, password, date) {
        const data = {
            ID_USER: 666,
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
            throw error
        }
    }
};

module.exports = new User;