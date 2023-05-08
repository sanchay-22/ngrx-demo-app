import { UserModel } from '../models/auth.model'

export interface AuthState {
    user: UserModel | null;

}

export const AUTH_INITAL_STATE_CONST: AuthState = {
    user: null,
}