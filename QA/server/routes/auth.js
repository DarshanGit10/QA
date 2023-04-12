const express = require("express");
const router = express.Router();
const Users = require('../models/Users')


// Create a new User POST method, Login not req
router.post('/register', async (req, res) => {
    try {
      const { fullName, email, age, place, occupation, gender } = req.body;
      if (!fullName  || !email || !age || !place || !occupation || !gender) {
        return res.status(400).json({ error: "Fill all the fields" });
      } else {
        const isAlreadyExist = await Users.findOne({ email });
        if (isAlreadyExist) {
          return res.status(400).json({ error: "Email already exists" });
        } else {
          const newUser = new Users({ fullName, email, age, place, occupation, gender });
          await newUser.save();
          return res.status(200).json('User registered successfully');
        }
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

module.exports = router;