import {} from '../entities'

export interface LoginRepository {
  registerUser(newUser: IUser): Promise<any>;
  signIn(email: string, password: string): Promise<any>;
}
