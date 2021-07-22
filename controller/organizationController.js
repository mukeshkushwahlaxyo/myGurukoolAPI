const express = require('express');
const app = express();
const router = express.Router();

const Organization = require('../model/organizationSchema');

router.post('/organization', async (req,res) => {
  
  const {creatorName, orgName, orgSize, orgAddress, orgCountry} = req.body;

  try {
   
    if(!creatorName || !orgName || !orgSize || !orgAddress || !orgCountry)
    {
      res.status(422).json({error: "Please Fill All Feild"});
    }

    const org = new Organization({creatorName, orgName, orgSize, orgAddress, orgCountry})
    await org.save();

    res.status(201).json({success: "Data Inserted Successfully"});
    
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;