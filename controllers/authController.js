import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }
  const userAlreadyExists = await User.find({ email });
  if (userAlreadyExists) {
    throw new BadRequestError("user with this email already exist");
  }
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
const login = async (req, res) => {
  res.send("login user");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
