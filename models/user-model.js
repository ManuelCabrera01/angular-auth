const moongoose = require ("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema(
  {
  username:{
      typer:String,
     require :[true "Username in require" ],
}
  password: {
    type: String,
    require :[true , "passwordids require"],

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
}});
//"User -> "user"->"users" collection.................
const User = mongoose.model('User', userSchema);
module.exports = User;
