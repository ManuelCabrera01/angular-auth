const passport = require('passport');

const User = require('../models/user-model');

// serialize :save only the aID  of the usr document i  the session
 passport.serializeUser((loggedInUser, cb)=>{
   cb(null,loggedInUser._id);
 });
//desserialize :retetrive the full user details from  the data base using ID
//(the suser is store in the session)
passport.deserializeUser((userIdFromSession, cb)=>{
  User.findById(userIdFromSession, (err, userDocument)=>{
    if (err) {
      cd(err);
      return;
    }
    cb(null, userDocument);
  });

});
