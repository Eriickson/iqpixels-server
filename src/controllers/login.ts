import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models";
import { envs } from "../configs";

export class LoginController {
  async registerUser(req: Request, res: Response) {
    const { name, lastname, birthday, email, password } = req.body;

    const userFound = await User.findOne({ email });

    if (userFound)
      return res.json({ error: "Este correo electrónico ya está registrado" });

    const salt = bcrypt.genSaltSync(12);
    const passwordHash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      name,
      lastname,
      birthday,
      email,
      password: passwordHash,
    });

    try {
      await newUser.save();

      const payload = {
        id: newUser._id,
        email,
      };

      const token = jwt.sign(payload, envs.SECRECT_TOKEN_LOGIN, {
        expiresIn: "24h",
      });
      res.status(201).json({ token });
    } catch (err) {
      console.log(err);
    }
  }
  async signIn(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log({ email, password });
    const userFound = await User.findOne({ $and: [{ email }] });

    if (!userFound)
      throw new Error("Correo electrónico o contraseña incorrectos");

    const passwordHash = bcrypt.compareSync(password, userFound.password);

    if (!passwordHash)
      throw new Error("Correo electrónico o contraseña incorrectos");

    const payload = {
      id: userFound._id,
      email,
    };

    const token = jwt.sign(payload, envs.SECRECT_TOKEN_LOGIN, {
      expiresIn: "24h",
    });

    res.json({ token });
  }
}
