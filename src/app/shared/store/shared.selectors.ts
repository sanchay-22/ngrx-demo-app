import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiState, RouterStateUrl } from '../misc/shared.model';
import { StateEnum } from '../misc/shared.enum';
import { RouterReducerState } from '@ngrx/router-store';

export const getApiState = createFeatureSelector<ApiState>(StateEnum.LOADER_STATE);
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router sate');

export const getLoader = createSelector(getApiState, (state) => state.loadingStatus);
export const getErrorMessage = createSelector(getApiState, (state) => state.errorMessage);
export const getCurrentRoute = createSelector(getRouterState, (router) => router.state);
