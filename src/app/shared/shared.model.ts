import { Params } from '@angular/router';

export class UserModel {
    constructor(private email: string, private token: string, private localId: string, private tokenExp: Date) {}   
    
    get tokenExpDate(): Date {
        return this.tokenExp;
    }

    get userToken(): string | null {
        return (new Date(this.tokenExp).getTime() > new Date().getTime()) ? this.token : null;
    }
}

export interface Post {
    id?: string;
    title: string;
    description: string;
}

export interface ApiState {
    loadingStatus: boolean;
    errorMessage: string;
}

export interface AuthState {
    user: UserModel | null;
}

export interface RotuerUrlState {
    url: string;
    params: Params;
    queryParams: Params
}