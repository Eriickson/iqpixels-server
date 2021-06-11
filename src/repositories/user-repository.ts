import { IUser } from "../entities";

export interface UserRepository {
  getUserById(id: string): Promise<IUser>;
}
