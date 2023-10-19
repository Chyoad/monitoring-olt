import express from "express";
import cors from "cors";
import { errorMiddleware } from "../middleware/error-middleware.js";
import { apiRouter } from "../routes/api.js";

export const web = express();
web.use(express.json());
web.use(cors())

web.use(apiRouter);

web.use(errorMiddleware);