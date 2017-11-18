const express = require ('express');
const bcrypt  = require ('bcrypt');

const User = require ('../models/user-model');

 const router = express.Router();
 router.post('/signup', (req, res, next)=>{
   const username= req.body.username; //username from the user model schema = username from the form
   const password = req.body.password;

   if (!username || !password){
     res.status(400).json({message:"provide username and password"})
     return;
   }

   User.findOne({username:username}, '_id', (err,foundUser)=>{
 if(foundUser){
  res.status(400).json({message: 'the user name already exits'});
  return;
}
 const salt = bcrypt.genSaltSync(10);
 const hashPass = bcrypt.hashSync(password, salt);
 const TheUser = new User ({

   username: username,
   password:hashPass
 });

 TheUser.save((err) => {
   if (err) {
     res.status(500).json({ message: 'somthing went wrong'});

   }
   req.login(TheUser,(erro)=> {
     res.status(200).json(TheUser);
   });
     });//theUset.save()
   });//USser.find
 });//GET/signup
  module.exports = router;

  router.post ('/login', (req, res, next )=> {
const username = req.body.username;
const password = req.body.password;

User.findOne ({usernma: username }, (err, foundUser)=> {
if (foundUser === null ){
  res.status(400).json({message: 'incorrect username'});
  return;

}

if (!bcrypt.compareSync(password, foundUser.password)){
  res.status(400).json({massage:"incorretc pasword"});
  return;
}
req.login(foundUser, (err) => {
  req.status(200).json(foundUser);
});
  });
    });
