const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
router.route('/')
    .get(userController.getAllUser)
    .post(userController.createNewUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)

module.exports = router;