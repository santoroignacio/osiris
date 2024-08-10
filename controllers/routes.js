const express = require('express');
const router = express.Router();
const subCompanyController = require('../controllers/subCompanyController');

// Define routes
router.use('/subCompany', subCompanyController);

module.exports = router;