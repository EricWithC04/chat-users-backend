import Express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import fileUpload from "express-fileupload"

const app = Express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(Express.json())
app.use(fileUpload())

export default app