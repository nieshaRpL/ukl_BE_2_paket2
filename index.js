import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'
import user_Route from './routes/user_route.js'
import authRoute from './routes/auth_route.js'
import barang_Route from './routes/inventory_controller.js'
import peminjaman_Route from './routes/peminjaman_route.js'

const app = express()

dotenv.config()

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/users', user_Route)
app.use('/api/inventory', barang_Route)
app.use('/api/inventor',peminjaman_Route)



app.use(bodyParser.json())

app.listen(process.env.APP_PORT, () => {
    console.log("server run on port "+ process.env.APP_PORT);
})