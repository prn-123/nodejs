var express = require('express');


const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const contact = new Schema({
  id: ObjectId,
  name: String,
  phone: String
});
//const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');

let Contacts= {};

const myModel = mongoose.model('contact', contact);



Contacts.getAll = function(){
	return new Promise(function(resolve, reject){
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		myModel.find({},function(err,contact){
			if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				//console.log(result);
				console.log(contact);

				resolve(contact);
			}
        });
    })
 }



Contacts.saveNew = function(newContact){
	console.log('newContact.phone' + newContact.phone)
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		var newCont = new myModel({
			name: `${newContact.name}`,
			phone: `${newContact.phone}`
		})
		newCont.save(function(err){
			if (err) {
				console.log(err);
				console.log('ERR :: Saving data into database..');
			}
        });
}


Contacts.delete = function(Contact){
	return new Promise(function ( resolve, reject){
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/myDB');
		myModel.findOneAndRemove({name:`${Contact.name}`},function(err){
			if(err){
				console.log('ERR:Deleting data');
			}
			else{
				resolve(contact);
			}
		});	
});
}



/*Contacts.updateRow= function(newContact){
	return new Promise(function (resolve, reject){


		// //Set up default mongoose connection
		const connection = mongoose.connect('mongodb://127.0.0.1:27017/MyDB');


		myModel.findOneAndUpdate({id:`${newContact.id}`}, {name: `${newContact.name}`, phone: `${newContact.phone}` }, function(err, con) {
		  if (err) {
				console.log(err);
				console.log('ERR :: fetching data from database..');
				reject();
			}
			else {
				//console.log(result);
				console.log('con.......'+ con);
				resolve(con);

			}
		});
		
	});
}
*/


module.exports = Contacts;