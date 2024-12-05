import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';

import {environment} from '../../environments/environment';
import {authReducer, authNode} from './auth/auth.reducer';
import {AuthState} from '../interfaces/auth-state';


export interface State {
  [authNode]: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  [authNode]: authReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
