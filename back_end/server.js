import express from "express";
import bodyParser from "body-parser";
import http from "http";
import { config } from "./src/config/config.js";
import cors from 'cors'
import helmet from 'helmet'
import { connectToDb } from "./src/dbConnection/mongoConnection.js";
import userRoute from './src/routes/userRoute.js'
import adminRoute from './src/routes/adminRoute.js'
import restaurantRoute from './src/routes/restaurantRoute.js'

const app = express();

const startServer = () => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  // cors policies
  app.use(cors({
    origin: ['http://localhost:3000'],
    methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }))
  // http header helmet policies
  app.use(helmet())

  // routes are difined here
  app.use("/user",userRoute)
  app.use("/admin",adminRoute)
  app.use("/restaurant",restaurantRoute)

  // calling server listen
  http
    .createServer(app)
    .listen(config.server.port, () =>
      console.log(`Server started, Running at PORT ${config.server.port}`)
    );
};

// server connection is made only if db connection is available
connectToDb(startServer)
