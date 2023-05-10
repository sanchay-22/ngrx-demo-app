export interface AuthResponseDataModel {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

export class UserModel {
    constructor(private email: string, private token: string, private localId: string, private expirationDate: Date) {}   
    
    get tokenExpiresIn(): Date {
        return this.expirationDate;
    }
}