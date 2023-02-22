import dotenv from 'dotenv'
import { app } from './index'

dotenv.config()

const PORT = process.env.PORT ?? 8080

app.listen(PORT, () => {
  console.log(`Running on ${PORT} ⚡`)
})
