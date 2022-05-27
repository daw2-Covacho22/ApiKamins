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

// GET Listar todos los vehiculos, podemos hacerlo todos.
router.get('/', userCtrl.getUsers)

// GET Listar los vehículos por ID
router.get('/:userId', userCtrl.getUserById)

//PUT actualizar un vehiculo solo puedes hacerlo si tienes token
router.put('/:userId', authJwt.verifyToken, userCtrl.updateUserById)

// DELETE borrar un vehiculo solo puedes hacerlo si tienes token
router.delete('/:userId', [authJwt.verifyToken], userCtrl.deleteUserById)



export default router;






