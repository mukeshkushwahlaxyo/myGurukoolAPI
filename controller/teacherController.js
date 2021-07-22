const express = require('express');
const app = express();
const router = express.Router();
const Teacher = require('../model/teacherSchema');


router.post('/teacher', async (req,res) => {

  const {first_name, last_name, email, organization} = req.body;

  try {
    
    if(!first_name ||  !last_name ||  !email ||  !organization)
    {
      res.status(422).json({error: "Please Fill All Feild"});
    }

    const teacher = new Teacher({first_name, last_name, email, organization});
    await teacher.save();

    res.status(201).json({success: 'Teacher Insert Successfull'});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;