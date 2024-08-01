"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const userController_1 = require("../controllers/userController");
const router = express.Router();
router.post('/', userController_1.createUser);
module.exports = router;
