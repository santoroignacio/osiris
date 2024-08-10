const express = require('express');
const router = express.Router();
const subCompanyService = require('../services/subCompanyService'); 

// Create a new subCompany
router.post('/', async (req, res) => {
  try {
    await subCompanyService.createSubCompany(req, res);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

// Read all subCompanies
router.get('/', async (req, res) => {
  try {
    await subCompanyService.getAllSubCompanys(req, res);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

// Read a specific subCompany by ID
router.get('/:id', async (req, res) => {
  try {
    await subCompanyService.getSubCompanyById(req, res);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }
});

// Update a specific subCompany
router.put('/:id', async (req, res) => {
  try {
    await subCompanyService.updateSubCompany(req, res);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error  : error.message });
  }
});

// Delete a specific subCompany
router.delete('/:id', async (req, res) => {
  try {
    await subCompanyService.deleteSubCompanyById(req, res);
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message });
  }

});


module.exports = router;
