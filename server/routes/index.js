const express = require('express')
const registerUser = require('../controller/userDetails')

const router = express.Router()

// create user api 
router.post('/register',registerUser)



module.exports = router