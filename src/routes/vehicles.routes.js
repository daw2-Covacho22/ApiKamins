import {Router} from 'express'
const router = Router()

import * as vehiclesCtrl from "../controllers/vehicles.controller"

router.post('/', vehiclesCtrl.createVehicle)

router.get('/', vehiclesCtrl.getVehicles)

router.get('/:vehicleId', vehiclesCtrl.getVehiclesById)

router.put('/:vehicleId', vehiclesCtrl.updateVehiclesById)

router.delete('/:vehicleId', vehiclesCtrl.deleteVehiclesById)


export default router;