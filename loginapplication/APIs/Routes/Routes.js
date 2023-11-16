const express = require('express');
const userController = require('../Controllers/Controller');

const router = express.Router();
console.log("inside route");
router.post('/create', userController.createUser);
router.put('/edit', userController.updateUser);
router.delete('/delete', userController.deleteUser);
router.get('/getAll', userController.getAllUsers);
router.post('/login', userController.loginUser);

module.exports = router;
