import { User } from "../models";
import { UserRepository } from "../repositories";
import { IUser } from "../entities";

export class UserProvider implements UserRepository {
  async getUserById(id: string) {
    try {
      const userFound: IUser = await User.findById(id);

      if (!userFound) throw new Error("Usuario no encontrado");

      return userFound;
    } catch (err) {
      throw new Error(err);
    }
  }
}
