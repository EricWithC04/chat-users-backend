import app from "./src/app.js";
import env from "./src/environment/environment.js";
import sequelize from "./src/config/db.js";

sequelize.authenticate().then(() => {
    console.log("Database connected...");

    app.listen(env.PORT, () => {
        console.log(`Server running on port ${env.PORT}`)
    })
})