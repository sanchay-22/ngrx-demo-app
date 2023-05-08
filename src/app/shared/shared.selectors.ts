import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LoaderState } from './shared.model';
import { StateEnum } from './shared.enum';

export const LOADER_STATE_CONST = createFeatureSelector<LoaderState>(StateEnum.LOADER);

export const getLoader = createSelector(LOADER_STATE_CONST, (state) => state.loadingStatus);