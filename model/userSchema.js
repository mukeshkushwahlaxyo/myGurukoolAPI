const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const users = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    middle_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    role:{
      type:'string',
      require:true,
    }
  }
)

users.pre('save', async function (next) {
  
  if(this.isModified('password'))
  {
    this.password = await bcrypt.hash(this.password,12);
  }
  next();
});

const User = new mongoose.model("USER", users);
module.exports = User;
