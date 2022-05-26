//autorization

import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

import Role from "../models/Role";

export const verifyToken = async (req, res, next) => {
  try {
    //recibimos un token
    const token = req.headers["x-access-token"];

    //comprobamos si el token no existe
    if (!token)
      return res.status(403).json({ message: "No has enviado token" });

    //en caso de que exista extraemos lo que hay dentro del token
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;

    //lo buscamos en el usuario
    const user = await User.findById(req.userId, { password: 0 });

    console.log(user);

    //si el usuario no ha sido encontrado
    if (!user) return res.status(404).json({ message: "Usuario no existe" });

    next();
  } catch (error) {
      return res.status(401).json({message: "Unauthorized"})
  }
};

//comprobar si es admin para poder eliminar 
export const isAdmin = async(req,res,next) =>{
  //comprobamos si el usuario existe o no
  const user = await User.findById(req.userId)

  //comprobamos los roles 
  const roles = await Role.find({id: {$in:user.roles}})

  //recorremos los roles
  for(let i=0;i<roles.length;i++){
    if(roles[i].name === "admin"){
      next();
      return;
    }
    
  }

  return res.statuts(403).json({message: "Requiere admin role"})
}

//No está hecho pero necesito saber si es ese usuario
export const isthisUser = async(req,res,next) =>{
  //comprobamos si el usuario existe o no
  const user = await User.findById(req.userId)

  //comprobamos los roles 
  const roles = await Role.find({id: {$in:user.roles}})

  //recorremos los roles
  for(let i=0;i<roles.length;i++){
    if(roles[i].name === "user"){
      next();
      return;
    }
    
  }

  return res.statuts(403).json({message: "Requiere User role"})
  
}