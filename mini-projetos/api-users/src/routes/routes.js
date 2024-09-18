const express = require('express');
const router = express.Router();

/* controller */
const UserController = require('../controllers/UserController');

/* get */
router.get('/users', UserController.listUsers) //list all
router.get('/user/:id', UserController.findUserById) //get a user

/* post */
router.post('/user', UserController.new) //create a user

/* put */
router.put('/user', UserController.editUser) //edit user
router.put('/user/password', UserController.editPasswordUser) //edit a user password 

/* delete */
router.delete('/user/:id', UserController.deleteUser) //delete a user

module.exports = router;