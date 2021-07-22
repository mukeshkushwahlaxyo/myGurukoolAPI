const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require("../model/userSchema");

router.post('/register', async (req,res) => {
  
  const {first_name, middle_name, last_name, mobile, date_of_birth, username, email, password, country, city, state, about, role} = req.body;


  try {

    if(!first_name || !middle_name || !last_name || !mobile || !date_of_birth || !username || !email || !password || !country || !city || !state || !about || !role)
    {
      return res.status(422).json({error: 'Please Fill All Feilds'});
    }

    const userExit = await User.findOne({email:email});
    if(userExit)
    {
      res.status(422).json({error:'User Already Registred'});
    }
    else {
      const user = new User({first_name, middle_name, last_name, mobile, date_of_birth, username, email, password, country, city, state, about, role});
      await user.save();
      res.status(201).json({success:'Registred Successfully'});

    }
  } catch (error) {
    console.log(error);
  }
  
});

module.exports = router;