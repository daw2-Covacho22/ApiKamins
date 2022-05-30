import {Router} from 'express'

const router = Router()

import * as placesCtrl from "../controllers/places.controller"
import {authJwt} from '../middlewares'
//import { authJwt } from '../middlewares'

// POST Crear un nuevo lugar, solo puedes hacerlo si tienes token.
router.post('/', authJwt.verifyToken, placesCtrl.createPlace)

// GET Listar todos los vehiculos, podemos hacerlo todos.
router.get('/', authJwt.verifyToken, placesCtrl.getPlaces)

// GET Listar los vehículos por ID
router.get('/:placeId', placesCtrl.getPlacesById)

//PUT actualizar un vehiculo solo puedes hacerlo si tienes token
router.put('/:placeId', authJwt.verifyToken, placesCtrl.updatePlacesById)

// DELETE borrar un vehiculo solo puedes hacerlo si tienes token
router.delete('/:placeId', authJwt.verifyToken, placesCtrl.deletePlaceById)



export default router;