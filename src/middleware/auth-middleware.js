import jwt from "jsonwebtoken";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

export const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.query.apiKey;

    const user = await prismaClient.user.findFirst({
      where: {
        token: token
      }
    });

    if (!user) {
      res.status(401).json({ errors: "Unauthorized" }).end();
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role === "ADMIN") {
        req.user = decoded;
        next();
      } else {
        res.status(401).json({ error: "Invalid role" });
      }
    }

  } catch (err) {
    res.status(401).json({
      errors: "Unauthorized",
      message: err.message
    });
  }
}

export const petugasMiddleware = async (req, res, next) => {
  try {
    const token = req.query.apiKey;

    const user = await prismaClient.user.findFirst({
      where: {
        token: token
      }
    });

    if (!user) {
      res.status(401).json({ errors: "Unauthorized" }).end();
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role === "PETUGAS" || decoded.role === "ADMIN") {
        req.user = decoded;
        next();
      } else {
        res.status(401).json({ error: "Invalid role" });
      }
    }

  } catch (err) {
    res.status(401).json({
      errors: "Unauthorized",
      message: err.message
    });
  }
}

export const deviceMiddleware = async (req, res, next) => {
  try {
    const token = req.query.apiKey;
    const deviceId = req.params.deviceId

    const device = await prismaClient.device.findFirst({
      where: {
        deviceId: deviceId
      },
      select: {
        apiKey: true
      }
    });

    if (!device) {
      res.status(404).json({ errors: "Device not found" }).end();
    } else {
      if (token === device.apiKey) {
        next();
      } else {
        res.status(401).json({ error: "Unauthorized" });

      }
    }

  } catch (err) {
    res.status(401).json({
      errors: "Unauthorized",
      message: err.message
    });
  }
};