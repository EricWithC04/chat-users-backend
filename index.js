import app from "./src/app.js";
import env from "./src/environment/environment.js";

app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`)
})