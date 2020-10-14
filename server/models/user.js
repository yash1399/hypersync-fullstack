const mongoose = require('mongoose');
const uniqueValid = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    fname:{
        type:String,
        required: true
    },
    lname:{
        type:String,
        required: true
    },
    username:{
        type:String,
        required:true,
        unique: true

    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password : {
        type:String,
        required:true
    },
    groups: [{
        type: Schema.Types.ObjectId,
        ref: 'Group'
      }],
      tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
      }],
      date: {
        type: Date,
        default: Date.now
      }
})

UserSchema.plugin(uniqueValid);
const User= mongoose.model('users', UserSchema);
module.exports = User;
