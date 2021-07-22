const express = require('express');
const app = express();
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../model/userSchema');

router.post('/login', async (req, res) => {

  const {email, password} = req.body;
  
  try {
    
    if(!email || !password)
    {
        res.status(422).json({error: 'Please Fill All Feild'});
    }

    const checkUser = await User.findOne({email:email});
    
    if(checkUser)
    {
      const isMatch = await bcrypt.compare(password,checkUser.password);

      if(!isMatch)
      {
        res.status(422).json({error: 'Credential Not Match'});
      }

      res.status(200).json({success: 'Login Success'});
    } else {
      res.status(422).json({error: 'Credential Not Match'});
    }

  } catch (error) {
    console.log(error);
  }

});

module.exports = router;