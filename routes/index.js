var express = require('express');
var router = express.Router();


var Contacts = require('../models/contact.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Contact' });
});


router.get('/saveData', function(req,res,next){
	console.log(req.query)
	
	Contacts.saveNew(req.query)

		 res.redirect('/getAllContact');

	//.catch(console.log('ERR:Error in resolving the promise'))
	// res.render('contacts' ,{data: req.query})
});

router.get('/getAllContact', function(req,res,next){
	//console.log(req.query)
	console.log(Contacts)
	Contacts.getAll()
	.then(function(retVal){
		console.log(retVal);
		res.render('contacts' ,{data: retVal});
	})
	.catch(console.log('ERR:Fetching data from database'));
	});
router.get('/getAll', function(req,res,next){//REST
	//console.log(req.query)
	console.log(Contacts)
	Contacts.getAll()
	.then(function(retVal){
		console.log(retVal);
		res.send(retVal);
	})
	.catch(console.log('ERR:Fetching data from database'));
	});

router.get('/delete',function(req,res,next){
  Contacts.delete(req.query)
  .then(function(){
  	res.redirect('/getAllContact');
  })	
  .catch(console.log('ERR:deleting data'));
});

/*router.get('/updateRow', function(req, res, next) {
	Contacts.updateRow(req.query)
	.then(function(){
		console.log('reachede here')
	 	res.redirect('/getAllContact')
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});
router.get('/updatePug', function(req, res, next) {
	 	res.render('update',{data:req.query});
	 })
	 */


module.exports = router;

