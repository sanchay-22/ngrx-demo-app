import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiState } from './shared.model';
import { StateEnum } from './shared.enum';

export const API_STATE_CONST = createFeatureSelector<ApiState>(StateEnum.LOADER);

export const getLoaderState = createSelector(API_STATE_CONST, (state) => state.loadingStatus);
export const getErrorMessageState = createSelector(API_STATE_CONST, (state) => state.errorMessage);