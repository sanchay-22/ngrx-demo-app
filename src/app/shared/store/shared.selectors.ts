import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiState, RouterStateUrl } from '../misc/shared.model';
import { StateEnum } from '../misc/shared.enum';
import { RouterReducerState } from '@ngrx/router-store';

export const API_STATE_CONST = createFeatureSelector<ApiState>(StateEnum.LOADER_STATE);
export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router sate');

export const getLoaderState = createSelector(API_STATE_CONST, (state) => state.loadingStatus);
export const getErrorMessageState = createSelector(API_STATE_CONST, (state) => state.errorMessage);
export const getCurrentRoute = createSelector(getRouterState, (router) => router.state);
