//require("dotenv").config()
import 'dotenv/config'
import app from "./app";
import { AppDataSource } from "./data-source";

(async () => {
    await AppDataSource.initialize()
    .catch((error) => console.log(error))
    

    app.listen(3000, () => {
        console.log('Server Running');
        
    })
}) ()