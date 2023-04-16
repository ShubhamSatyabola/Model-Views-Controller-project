const User = require('../models/user')

exports.userGet = async (req,res,next)=>{
  try{const user = await User.findAll();
    res.status(201).json({allUsers: user})
  }catch(err){
    console.log(err)
  }
  
}
exports.userPost = async (req,res,next)=>{
  try {
    if(!req.body.email && !req.body.number){
      throw new Error("phone and email fileds are mandatory")
    }
  const name = req.body.Name;
  const email = req.body.email;
  const number = req.body.phone;
  const data = await User.create({name: name, email: email, number: number}) 
  res.status(201).json({newUserDetails: data});
}
  catch(err){
    console.log(err)
    res.status(500).json({error: err})
  }
}

// exports.userEdit = (req,res,next)=>{

//     const id = req.params.userId;
//     const updatedName = req.body.updatedName;
//     const updatedEmail = req.body.updatedEmail;
//     const updatedNumber = req.body.updatedNumber;
//     User.findByPk(id).then(user=>{
//       user.name = updatedName;
//       user.email = updatedEmail;
//       user.number = updatedNumber;
//       return user.save()
//     }).catch(err=>console.log(err))
  
// }
exports.userDelete = async(req,res,next)=>{
  try {const id = req.params.userId
  const user= await User.findByPk(id);
  user.destroy();
  console.log('Destroyed Project')
  }
  catch(err){console.log(err)};
     
  
}