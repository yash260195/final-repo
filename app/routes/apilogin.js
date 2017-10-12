var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var articleData = require('../data/loginapp.json');

//to load article page 
router.get('/apilogin', function(req, res) {
    res.json(articleData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false}));

router.post('/apilogin', function(req, res) {
	articleData.unshift(req.body);
    fs.readFile('app/view/login.ejs', JSON.stringify(articleData), 'utf8', 
        function(err) { 
            if(userName == "A" && passWord== "A")
            {alert(A);
                console.log("Sucess")
                res.redirect('/articles');
            }
            else
            {
                Console.log("Error!");
            }
           
        });
	res.json(articleData);
});

//router.delete('/api/:id', function(req, res) {
//	articleData.splice(req.params.id, 1);
//  fs.writeFile('app/data/articlesubmitted.json', JSON.stringify(articleData), 'utf8', 
  //      function(err) { 
    //        if(err){
      //      console.log(err);
        //    }
        //});
	//res.json(articleData);
//});

module.exports = router;