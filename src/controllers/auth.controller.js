import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from '../config';
import Role from '../models/Role';

export const signup = async (req, res) => {

    const {username, email, password, roles} = req.body;

    const newUser = new User({
        username, 
        email, 
        password: await User.encryptPassword(password)

    })

    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else{
        const role = await Role.findOne({name: "user"})
        newUser.roles = [role._id];
    }

    const savedUser = await newUser.save();
    console.log(savedUser)

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 //24 hours
    })

    res.json({savedUser,token})
}

export const signin = async (req, res) => {
   const userFound = await User.findOne({email: req.body.email}).populate("roles");

   console.log(userFound)

   if(!userFound) return res.status(400).json({message: "User not found"})

   const matchPassword = await User.comparePassword(req.body.password, userFound.password)
   
   if(!matchPassword) return res.status(401).json({token: null, message: 'Invalid Password'})

   const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400 //24 hours
    })
   
   res.json({userFound, token})
}

export const logout = async (req, res) => {
    const userFound = await User.findOne({id: req.body._id}).populate("roles");

    console.log(userFound)

    if(!userFound) return res.status(400).json({message: "User not found"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 0 //0 hours
    })
    
    res.send("logout success!");
    
}