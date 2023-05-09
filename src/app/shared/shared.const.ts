import { SharedApiState } from './shared.model';

export const API_INTIAL_STATE_CONST: SharedApiState = {
    loadingStatus: false,
    errorMessage: '',
}

export const SHARED_API_STATE_KEY_CONST: string = 'shared api state';