const express = require('express');
const router = express.Router();

/* middleware */
const AdnAuth = require('../middleware/AdmAuth');

/* controller */
const UserController = require('../controllers/UserController');

/* get */
router.get('/users', AdnAuth, UserController.listUsers) //list all
router.get('/user/:id', AdnAuth, UserController.findUserById) //get a user

/* post */
router.post('/user', UserController.new) //create a user
router.post('/login', UserController.login) //user login (create jwt)

/* put */
router.put('/user', AdnAuth, UserController.editUser) //edit user
router.put('/user/password', AdnAuth, UserController.editPasswordUser) //edit a user password 

/* delete */
router.delete('/user/:id', AdnAuth, UserController.deleteUser) //delete a user

module.exports = router;