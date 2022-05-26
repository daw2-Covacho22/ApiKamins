import express from "express";
import morgan from "morgan";

import pkg from "../package.json";

import placesRoutes from "./routes/places.routes";
import vehiclesRoutes from "./routes/vehicles.routes";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/user.routes"



import { createRoles } from "./libs/initialSetup";

const app = express()

createRoles()

app.set('pkg', pkg)

app.use(morgan('dev'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})

app.use('/api/vehicles', vehiclesRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)

export default app;