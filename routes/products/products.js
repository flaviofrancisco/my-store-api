const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send([{
        name: 'orange'
    }, 
    {
        name: 'apple'
    }]);
});

module.exports = router;
