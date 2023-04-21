import express  from "express";
import {dotenv} from 'dotenv'
import bodyParser from "body-parser";

const app=express()
dotenv.config();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())






