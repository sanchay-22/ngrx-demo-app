import { ApiState } from './shared.model';

export const API_INTIAL_STATE_CONST: ApiState = {
    loadingStatus: false,
    errorMessage: '',
}

export const API_STATE_KEY_CONST: string = 'api state';