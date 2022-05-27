import User from "../models/User";

//crear usuario
export const createUser = (req, res) => {
  res.json("creating user");
};

//Bucar los usuarios
export const getUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

//Ver los usuarios por id
export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId)
    res.status(200).json(user)
}

//Actualizar un usuario
export const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true
    })
    res.status(200).json(updatedUser)
}

//Borrar un lugar
export const deleteUserById = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId)
    res.status(204).json()
}
