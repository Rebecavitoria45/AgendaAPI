import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { router } from "./routes"

AppDataSource.initialize().then(async () => {
    const app = express();

    app.use(bodyParser.json());

    app.use(router);

    app.listen(3000, () => {
        console.log("Server has started on port 3000.");
    });
}).catch(error => console.log(error));