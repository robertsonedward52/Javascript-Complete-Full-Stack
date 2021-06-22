let usersCollection = require("../db").collection("users")

// requiring our validator package
const validator = require("validator")

let User = function(data) {
	// body...
	this.data = data
	this.errors = []
}

// cleanup user data function 
User.prototype.cleanUp = function() {
	if(this.data.username != "string") {this.data.username == ""}
	if(this.data.password != "string") {this.data.password == ""}
	if(this.data.email != "string") {this.data.email == ""}


	// get rig of any bogus properties 
	this.data = {
		username: this.data.username.trim().toLowerCase(),
		email: this.data.email.trim().toLowerCase(),
		password: this.data.password
	}

}

User.prototype.validate =  function() {

	// test for multiple conditions
	if(this.data.username == "") {
		this.errors.push("This username must not be empty.")
	}
	if(this.data.usernam != "" && !validator.isAlphanumeric(this.data.username)) {
		this.errors.push("username can only contains letters and numbers.")
	}
	if(this.data.password == "") {
		this.errors.push("This password must not be empty.")
	}
	if(!validator.isEmail(this.data.email)) {
		this.errors.push("This email must enter a validate email address.")
	}

	// check if the user password is less than 12
	// then push an error msgs
	if(this.data.password.length > 0 && this.data.password.length < 12) {
		this.errors.push("Password must be at least 12 character long.")
	}
	if(this.data.password.length > 100) {
		this.errors.push("Password cannot exceed 100 characters.")
	}

	// check the usernam
	if(this.data.username > 0 && this.data.username < 4) {
		this.errors.push("username must be at least 3 character long.")
	}
	if(this.data.username > 35) {
		this.errors.push("username cannot exceed be 35 characters.")
	}
	

}

User.prototype.register = function() {

	// cleanup user data
	this.cleanUp()
	// validate users data
	this.validate()


	// step: 2 only if there is no errors 
	// then save the users data in the database
	if(!this.errors.length) {
	 usersCollection.insertOne(this.data)
	}

}

module.exports = User