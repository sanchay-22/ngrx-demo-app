export interface PostModel {
    id?: string;
    title: string;
    description: string;
}

export interface SharedApiState {
    loadingStatus: boolean;
    errorMessage: string;
}