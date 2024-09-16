const express = require('express');
const router = express.Router();

/* controller */
const UserController = require('../controllers/UserController');

/* get */
router.get('/users') //list all
router.get('/user/:id') //get a user

/* post */
router.post('/user', UserController.new) //create a user

/* put */
router.put('/user') //edit user

/* delete */
router.delete('/user/:id') //delete a user

module.exports = router;