import User from '../models/User'
//minutos 1:06:40 de video
export const signup = async (req, res) => {
    const {name, username, email, password, roles} = req.body;

    const newUser = new User({
        name, 
        username, 
        email, 
        password: User.encryptPassword(password)

    })

    console.log(newUser)

    res.json('signup')
}

export const signin = async (req, res) => {
    res.json('signin')
}