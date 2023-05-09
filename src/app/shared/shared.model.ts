export interface PostModel {
    id?: string;
    title: string;
    description: string;
}

export interface ApiState {
    loadingStatus: boolean;
    errorMessage: string;
}