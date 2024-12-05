import {authPages, AuthShowAction} from './auth.actions';
import {AuthState} from '../../interfaces/auth-state';
import { createReducer, on } from '@ngrx/store';

export const authNode = 'auth';

const initialState: AuthState = {
  isShowAuth: false,
  isLogin: false,
  userName: '',
  userPwd: '',
  isAdmin: false,
  formReset: false,
  currentPage: authPages.login,
};

export const authReducer = createReducer(
  initialState,
  on(AuthShowAction, state => ({ ...state, isShowAuth: true })),
);
