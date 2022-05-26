import {Router} from 'express'

const router = Router()

import * as placesCtrl from "../controllers/places.controller"
//import { authJwt } from '../middlewares'

// POST Crear un nuevo lugar, solo puedes hacerlo si tienes token.
router.post('/', placesCtrl.createPlace)

// GET Listar todos los vehiculos, podemos hacerlo todos.
router.get('/', placesCtrl.getPlaces)

// GET Listar los vehículos por ID
router.get('/:placeId', placesCtrl.getPlacesById)

//PUT actualizar un vehiculo solo puedes hacerlo si tienes token
router.put('/:placeId', placesCtrl.updatePlacesById)

// DELETE borrar un vehiculo solo puedes hacerlo si tienes token
router.delete('/:placeId', placesCtrl.deletePlaceById)



export default router;