var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
    username: String,
    exercise: [{
		author: String,
		description: String,
		duration: Number,
		date: String
	}]
});

var User = mongoose.model('User', UserSchema);

router.post('/exercise/new-user', (req, res) => {
	User.find({username: req.body.username}, (err, users) => {
		if(users.length == 0) {
			User.create({ username: req.body.username }, function (err, user) {
		  		if (err) return handleError(err);
		  		res.json({username: user.username, _id: user._id})
			});
		} else {
			res.json("A user with this username already exists")
		}
	})

});

router.post('/exercise/add', (req, res) => {
	console.log(req.body.date.split("-").length)
	let date = "";
	if(req.body.date.split("-").length == 3) {
		var reqDate = req.body.date.split("-");
		let monthsArr 	= ['January','February','Mars','April','May','June','July','August','September','October','November','December'];
		date =  monthsArr[parseInt(reqDate[1] -1)] + " " + reqDate[2] + " " + reqDate[0];
		
	} else {
		date = Date().slice(3, 15)
	}
	console.log(date)
	User.findOne({_id: req.body.userId}, (err, user) => {

		if(user != undefined) {
			const data = {
				author: req.body._id,
				description: req.body.description,
				duration: req.body.duration,
				date: date
			}
			console.log(data)
			user.exercise.push(data);
			user.save();
			res.json(data)
		} else {
			res.json("There is no user with this id")
		} 		
	})

})

router.get('/exercise/log', (req, res) => {
	User.find({_id: req.query.userId}, (err, exo) => {
		console.log(exo);
		res.json(exo)
	})
});

router.get('/exercise/users', (req, res) => {
	User.find({}, (err, users) => {
		let data = [];
		Object.keys(users).map(i => {
			data.push({
				username: users[i].username,
				userId: users[i]._id
			})
		});
		res.json(data)
	})
})
module.exports = router; 
