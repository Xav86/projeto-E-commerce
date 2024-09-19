const express = require('express');
const router = express.Router();

/* middleware */
const AdmAuth = require('../middleware/AdmAuth');

/* controller */
const UserController = require('../controllers/UserController');

/* get */
router.get('/users', AdmAuth, UserController.listUsers) //list all
router.get('/user/:id', AdmAuth, UserController.findUserById) //get a user

/* post */
router.post('/user', UserController.new) //create a user
router.post('/login', UserController.login) //user login (create jwt)
router.post('/validate', AdmAuth, UserController.validate) //validate token

/* put */
router.put('/user', AdmAuth, UserController.editUser) //edit user
router.put('/user/password', AdmAuth, UserController.editPasswordUser) //edit a user password 

/* delete */
router.delete('/user/:id', AdmAuth, UserController.deleteUser) //delete a user

module.exports = router;