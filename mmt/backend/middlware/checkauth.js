
const UserModel = require("../Model/Users");
const bcrypt = require("bcryptjs");
const checkAuth = async(req,res,next) =>{

try {
    const { username, email, password,mobilenumber } = req.body;

     let obj = {
      username : req.body.username, 
      email : req.body.email, 
      password : req.body.password,
      mobilenumber : req.body.mobilenumber
     }

     if(username && email && password && mobilenumber){
      const user = await UserModel.findOne({ email: email });
      if (user) {
        res.status(400).send({ msg: "The email already exists." });
      }else{
        const passwordHash = await bcrypt.hash(password,10);
      
         req.body =     {...obj,password : passwordHash};
  
         next();
      } 
     }else{
      res.status(400).send({ msg: "Please fill the detail" });

     }



    
} catch (err) {
    res.status(500).send({ msg: err.message });
}
}

module.exports = checkAuth;