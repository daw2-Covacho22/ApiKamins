
import Vehicle from '../models/Vehicles'

export const createVehicle = async (req, res) => {

    const {name, model, tipo, autonomy} = req.body

    const newVehicle = new Vehicle({name, model, tipo, autonomy})

    const vehicleSaved = await newVehicle.save()

    res.status(201).json(vehicleSaved)
}

export const getVehicles = async (req, res) => {
    const vehicle = await Vehicle.find()
    res.json(vehicle)
}

export const getVehiclesById = (req, res) => {

}

export const updateVehiclesById = (req, res) => {

}
export const deleteVehiclesById = (req, res) => {

}