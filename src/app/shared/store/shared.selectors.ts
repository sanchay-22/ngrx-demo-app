import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiState } from '../misc/shared.model';
import { StateEnum } from '../misc/shared.enum';

export const API_STATE_CONST = createFeatureSelector<ApiState>(StateEnum.LOADER_STATE);

export const getLoaderState = createSelector(API_STATE_CONST, (state) => state.loadingStatus);
export const getErrorMessageState = createSelector(API_STATE_CONST, (state) => state.errorMessage);
