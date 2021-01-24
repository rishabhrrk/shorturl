const express = require('express')
let router = express.Router()
const homeController = require('../Controller/homeController')

router.post('/', homeController.generateShortURL);

router.get('/', homeController.fetchOriginalURL);

module.exports = router;