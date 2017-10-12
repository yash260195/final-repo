var express = require('express');
var router = express.Router();

//to load article page 
router.get('/login1', function(req, res){    
    
    res.render('login1', {
        pageTitle: 'Login',
        pageID: 'login',
        
    });
}); 
module.exports = router;