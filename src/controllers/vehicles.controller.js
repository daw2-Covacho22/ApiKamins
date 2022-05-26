
import Vehicle from '../models/Vehicles'

export const createVehicle = async (req, res) => {

    const {brand, model, tipo, autonomy} = req.body

    const newVehicle = new Vehicle({brand, model, tipo, autonomy})

    const vehicleSaved = await newVehicle.save()

    res.status(201).json(vehicleSaved)
}

export const getVehicles = async (req, res) => {
    const vehicles = await Vehicle.find()
    res.json(vehicles)
}

export const getVehiclesById = async (req, res) => {
    const vehicle = await Vehicle.findById(req.params.vehicleId)
    res.status(200).json(vehicle)
}

export const updateVehiclesById = async (req, res) => {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.vehicleId, req.body, {
        new: true
    })
    res.status(200).json(updatedVehicle)
}

export const deleteVehiclesById = async (req, res) => {
    await Vehicle.findByIdAndDelete(req.params.vehicleId)
    res.status(204).json()
}