import {Router} from 'express'
const router = Router()

import * as vehiclesCtrl from "../controllers/vehicles.controller"
import { authJwt } from '../middlewares'

// POST Crear un nuevo vehículo, solo puedes hacerlo si tienes token.
router.post('/', authJwt.verifyToken, vehiclesCtrl.createVehicle)

// GET Listar todos los vehiculos, podemos hacerlo todos.
router.get('/', authJwt.verifyToken, vehiclesCtrl.getVehicles)

// GET Listar los vehículos por ID
router.get('/:vehicleId', vehiclesCtrl.getVehiclesById)

//PUT actualizar un vehiculo solo puedes hacerlo si tienes token
router.put('/:vehicleId', authJwt.verifyToken, vehiclesCtrl.updateVehiclesById)

// DELETE borrar un vehiculo solo puedes hacerlo si tienes token
router.delete('/:vehicleId', authJwt.verifyToken, vehiclesCtrl.deleteVehiclesById)


export default router;