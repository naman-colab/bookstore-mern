import userModel from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup=async (req,res)=>{
try {
    
const{name,email,password}=req.body;

const existingUser= await userModel.findOne({email})

if(existingUser){
  return  res.status(400).json({message:"email already in use"})
}

// hashing password 

const hashPassword=await bcryptjs.hash(password,10);




const newUser=new userModel({
    name:name,
    email:email,
    password:hashPassword,
})


await  newUser.save()
 return res.status(201).json({message:"user created successfully",user:{
  _id:newUser._id,
  name:newUser.name,
  email:newUser.email,
 }})

} catch (error) {
   if(error.response){
    alert("error"+error.response.data.message)
   }
}


};






export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await userModel.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcryptjs.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Respond with user details
    return res.status(200).json({
      message: "Login successful",
      user: {
        _id: existingUser._id,
        name: existingUser.name,
        email: existingUser.email,
      },
    });
  } catch (error) {
    console.error("Internal server error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
