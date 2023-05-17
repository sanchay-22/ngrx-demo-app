import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StateEnum } from 'src/app/shared/misc/shared.enum';
import { AuthState } from 'src/app/shared/misc/shared.model';


const AUTH_STATE_CONST = createFeatureSelector<AuthState>(StateEnum.AUTH_STATE);

export const isAuthenticated = createSelector(AUTH_STATE_CONST, (state) => state.user ? true : false);

export const getToken = createSelector(AUTH_STATE_CONST, state => state.user ? state.user.userToken : null)