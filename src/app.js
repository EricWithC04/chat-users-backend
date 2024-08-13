import Express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import fileUpload from "express-fileupload"

import exampleRouter from "./routes/example.routes.js"
import userRouter from "./routes/user.routes.js" 

const app = Express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(Express.json())
app.use(fileUpload())

app.use("/example", exampleRouter)
app.use("/user", userRouter)

export default app