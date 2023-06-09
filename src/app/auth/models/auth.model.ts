export interface AuthResponseDataModel {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

export class UserModel {
    constructor(private email: string, private token: string, private localId: string, private tokenExp: Date) {}   
    
    get tokenExpDate(): Date {
        return this.tokenExp;
    }
}