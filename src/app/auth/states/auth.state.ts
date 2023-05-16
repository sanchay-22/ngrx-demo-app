import { UserModel } from '../models/auth.model'

export interface AuthState {
    user: UserModel | null;

}

export const INITIAL_AUTH_STATE: AuthState = {
    user: null,
}