import { app } from './app'

const PORT = process.env.API_PORT

app.listen(PORT, () => console.log(`Server runing at port: ${PORT}`))