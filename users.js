const express = require("express");
const router = express.Router();
//const users = require('../../Users');
const User = require("../../models/users.js");

//===========================================Get all users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();
    console.log(users);
    
    res.json({
      status:200,
      success:true,
      data:users
    })
  } catch (e) {
    res.json({
      status:404,
      success:false,
      error:e.message
    })
    // res.status(404).json({ success: false, error: err.message });
  }
});
//=========================================== Create Single User

router.post("/", async (req, res) => {
  console.log(req)
  try{
    User.findOne({email:req.body.email})
    .then(user =>{
      if(user){
        res.json({
          msg:'you already exist'
        })
      }
      else{
      const user = await User.create(req.body);
    res.json({
      success: true,
      dbid: user._id,
      status: 201
    });

      }
    })
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }

  // const newUser = new User(usr);
  // try {
  //   await newUser.save();
  //   res.status(201).json(usr);
  // } catch (e) {
  //   res.status(400).json({ message: "error in saving users" });
  // }
});

//===================================================================Get single user
// router.get('/:id', async (req, res) => {
//     try {
//     const userOne = await User.findById(req.params.id);
//     res.status(200).json({ success: true, data: userOne });
//   } catch (err) {
//     res.status(400).json({ success: false, error: err.message });
//   }

//     // let id = parseInt(req.params.id)
//     // console.log(id)
//     // let result = users.filter((item) => item.id == id)
//     // res.json(result[0])
// });
// router.delete('/:id', async (req, res) => {
//   try {
//        const post = await User.findByIdAndDelete(req.params.id);
//   res.json({
//       success: true,
//       status: 200, //ok
//       msg: 'user is deleted successfully'
//   })
 
//   } catch (error) {
//       console.log(error)
//   }

// })


module.exports = router;
