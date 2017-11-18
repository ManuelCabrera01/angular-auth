const passport = require('passport');

const User = require('../models/user');

 passport.serializeUser(()=>:{
   cb(null.loggerInUser._id);
 }
);
//desserialize :retetrive the full user details from  the data base using ID
//(the suser is store in the session)
passport.deserializeUser((userIdFromSession, cd)=>{
  User.findById(userIdFromSession, (err, userDocument)=>{
    if (err) {
      cd(err);
      return;
    }
    cdl(null, userDocument);
  });

});
