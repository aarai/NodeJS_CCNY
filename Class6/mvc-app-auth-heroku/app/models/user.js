// User model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: {type: String, required: true, index: {unique: true}},
  password: {type: String, required: true}
});

UserSchema.methods.verifyPassword = function(passwordToCheck) {
  return this.password === passwordToCheck;
}

mongoose.model('User', UserSchema);
