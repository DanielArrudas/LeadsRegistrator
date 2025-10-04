const connection = require('../database/connection');
const express = require('express');
const router = express.Router();
const CreateLeadController = require('../controllers/CreateLeadController');
const ListLeadController = require('../controllers/ListLeadController');

router.post('/novoLead',CreateLeadController.newLead);

router.get('/', (req, res) => {
        res.render('LeadsCreations', { title: 'Home Page' });
    });
router.get('/leads',ListLeadController.listLeads);

module.exports = router;