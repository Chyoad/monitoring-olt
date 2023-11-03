import jwt from "jsonwebtoken";

export const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.query.apiKey;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role === "ADMIN") {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ error: "Invalid role" });
    }

  } catch (err) {
    res.status(401).json({
      error: "Unauthorized",
      message: err.message
    });
  }
}

export const petugasMiddleware = async (req, res, next) => {
  try {
    const token = req.query.apiKey;

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (decoded.role === "PETUGAS" || decoded.role === "ADMIN") {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ error: "Invalid role" });
    }

  } catch (err) {
    res.status(401).json({
      error: "Unauthorized",
      message: err.message
    });
  }
}