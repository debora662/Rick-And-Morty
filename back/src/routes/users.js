const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('soy users')
})

module.exports = router