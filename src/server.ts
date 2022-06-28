import dotenv from'dotenv'
import { env } from 'process'
import app from './app'

dotenv.config()

app.listen(process.env.PORT)