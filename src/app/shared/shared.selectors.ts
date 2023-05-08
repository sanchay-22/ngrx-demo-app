import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiState } from './shared.model';
import { StateEnum } from './shared.enum';

export const LOADER_STATE_CONST = createFeatureSelector<ApiState>(StateEnum.LOADER);

export const getLoaderState = createSelector(LOADER_STATE_CONST, (state) => state.loadingStatus);