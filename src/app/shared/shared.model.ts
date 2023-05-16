export class UserModel {
    constructor(private email: string, private token: string, private localId: string, private tokenExp: Date) {}   
    
    get tokenExpDate(): Date {
        return this.tokenExp;
    }
}

export interface Post {
    id?: string;
    title: string;
    description: string;
}

export interface SharedApiState {
    loadingStatus: boolean;
    errorMessage: string;
}

export interface AuthState {
    user: UserModel | null;

}