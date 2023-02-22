import express, { type Express } from 'express'
import home from './routes/blog'
import cors from 'cors'
export const app: Express = express()

app.use(cors())
app.use(express.json())
app.use('/', home)
