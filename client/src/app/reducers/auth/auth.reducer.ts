import {
  AuthExitSuccessAction,
  AuthFormResetAction,
  AuthFormResetSuccessAction,
  AuthHideAction,
  AuthLoginSuccessAction,
  AuthOpenLoginPageAction,
  AuthOpenRegisterPageAction,
  AuthOpenRemindPageAction,
  authPages,
  AuthShowAction,
} from './auth.actions';
import { AuthState } from '../../interfaces/auth-state';
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
  on(AuthShowAction, (state) => ({
    ...state,
    isShowAuth: true,
    currentPage: authPages.login,
  })),
  on(AuthHideAction, (state) => ({
    ...state,
    isShowAuth: false,
  })),
  on(AuthLoginSuccessAction, (state, action) => ({
    ...state,
    isLogin: true,
    userName: action.userName,
    userPwd: action.userPwd,
    isAdmin: action.isAdmin || false,
  })),
  on(AuthExitSuccessAction, (state) => ({
    ...state,
    isLogin: false,
    userName: '',
    userPwd: '',
    isAdmin: false,
  })),
  on(AuthFormResetAction, (state) => ({ ...state, formReset: true })),
  on(AuthFormResetSuccessAction, (state) => ({ ...state, formReset: false })),
  on(AuthOpenLoginPageAction, (state) => ({
    ...state,
    currentPage: authPages.login,
  })),
  on(AuthOpenRegisterPageAction, (state) => ({
    ...state,
    currentPage: authPages.register,
  })),
  on(AuthOpenRemindPageAction, (state) => ({
    ...state,
    currentPage: authPages.remind,
  }))
);
