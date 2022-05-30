import {Router} from 'express'
const router = Router()

import * as userCtrl from '../controllers/user.controller'
import {authJwt, verifySingup} from '../middlewares'

//login
router.post('/', [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySingup.checkRolesExisted
] ,userCtrl.createUser);

// GET Listar todos los usuaros, podemos hacerlo todos.
router.get('/', 
    [authJwt.verifyToken,authJwt.isAdmin], 
    userCtrl.getUsers)

// GET Listar los usuarios por ID
router.get('/:userId', 
[authJwt.verifyToken,authJwt.isAdmin], 
userCtrl.getUserById)

//PUT actualizar un usuarios solo puedes hacerlo si tienes token
router.put('/:userId', authJwt.verifyToken, userCtrl.updateUserById)

// DELETE borrar un usuarios solo puedes hacerlo si tienes token
router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin,], userCtrl.deleteUserById)



export default router;






