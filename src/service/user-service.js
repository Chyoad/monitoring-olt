import { validate } from "../validation/validation.js";
import {
  getUserValidation,
  loginUserValidation
} from "../validation/user-validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import jwt from 'jsonwebtoken';

const login = async (request) => {
  const loginRequest = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: loginRequest.username,
    },
    select: {
      userId: true,
      username: true,
      password: true,
      role: true
    }
  });

  if (!user) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
  if (!isPasswordValid) {
    throw new ResponseError(401, "Username or password wrong");
  }

  const token = jwt.sign({ userId: user.userId, role: user.role }, process.env.SECRET_KEY, { expiresIn: 86400 });

  return prismaClient.user.update({
    data: {
      token: token
    },
    where: {
      userId: user.userId
    },
    select: {
      userId: true,
      username: true,
      role: true,
      token: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

const get = async (req) => {
  const userRequest = validate(getUserValidation, req);

  const user = await prismaClient.user.findUnique({
    where: {
      userId: userRequest.userId
    },
    select: {
      userId: true,
      username: true,
      role: true,
      createdAt: true,
      updatedAt: true
    }
  });

  if (!user) {
    throw new ResponseError(404, "User not found");
  }

  return user;
}

export default {
  login,
  get
}