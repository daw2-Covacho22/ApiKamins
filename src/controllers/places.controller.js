import Place from '../models/Places'

//Crear un lugar
export const createPlace = async (req, res) => {

    const {username, name, street, city} = req.body
    const newPlace = new Place({username, name, street, city})
    const placeSaved = await newPlace.save()
    res.status(201).json(placeSaved)
}

//Bucar los lugares
export const getPlaces = async (req, res) => {
    const places = await Place.find()
    res.json(places)
}



//Ver los lugares por id
export const getPlacesById = async (req, res) => {
    const place = await Place.findById(req.params.placeId)
    res.status(200).json(place)
}

//Actualizar un lugar
export const updatePlacesById = async (req, res) => {
    const updatedPlace = await Place.findByIdAndUpdate(req.params.placeId, req.body, {
        new: true
    })
    res.status(200).json(updatedPlace)
}

//Borrar un lugar
export const deletePlaceById = async (req, res) => {
    await Place.findByIdAndDelete(req.params.placeId)
    res.status(204).json()
}