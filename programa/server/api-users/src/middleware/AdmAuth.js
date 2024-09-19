const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {

    const authToken = req.headers['authorization'];

    if (authToken) {
        
        const bearer = authToken.split(' ');
        const token = bearer[1];

        try {
            const decoded = jwt.verify(token, process.env.TEMPERO);

            if (decoded.role === 1) {
                next();
            } else {
                res.status(401).json({error: 'Acesso negado!'});
                return;
            }
            
        } catch(error) {
            res.status(400).json({error: 'Token inválido, favor logar novamente'});
            return;
        }

    } else {
        res.status(403).json({error: 'necessário realizar autenticação'});
        return;
    }

}