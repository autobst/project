import {createAction, props} from '@ngrx/store';

export enum authActionsType {
  show = '[AUTH] show',
  hide = '[AUTH] hide',
  login = '[AUTH] log in',
  loginSuccess = '[AUTH] log in success',
  loginError = '[AUTH] log in error',
  exit = '[AUTH] exit',
  exitSuccess = '[AUTH] exit success',
  exitCancel = '[AUTH] exit cancel',
  remindPwd = '[AUTH] remind password',
  remindPwdSuccess = '[AUTH] remind password success',
  formReset = '[AUTH] form reset',
  formResetSuccess = '[AUTH] form reset success',
  register = '[AUTH] register user',
  registerSuccess = '[AUTH] register user success',
  openLoginPage = '[AUTH] open login page',
  openRemindPage = '[AUTH] open remind page',
  openRegisterPage = '[AUTH] open register page',
}

export enum authPages {
  login = 'login',
  remind = 'remind',
  register = 'register',
}

export const AuthShowAction = createAction(
  authActionsType.show
);

export const AuthHideAction = createAction(
  authActionsType.hide
);

export const AuthLoginAction = createAction(
  authActionsType.login,
  props<{ 
    userName: string;
    userPwd: string;
   }>()
);

export const AuthLoginSuccessAction = createAction(
  authActionsType.loginSuccess,
  props<{ 
    userName: string;
    userPwd: string;
    isAdmin?: boolean;
   }>()
);

export const AuthLoginErrorAction = createAction(
  authActionsType.loginError
);

export const AuthExitAction = createAction(
  authActionsType.exit
);

export const AuthExitSuccessAction = createAction(
  authActionsType.exitSuccess
);

export const AuthExitCancelAction = createAction(
  authActionsType.exitCancel
);

export const AuthFormResetAction = createAction(
  authActionsType.formReset
);

export const AuthFormResetSuccessAction = createAction(
  authActionsType.formResetSuccess
);

export const AuthRemindPwdAction = createAction(
  authActionsType.remindPwd,
  props<{ 
    userName: string;
    keyword: string;
   }>()
);

export const AuthRemindPwdSuccessAction = createAction(
  authActionsType.remindPwdSuccess
);

export const AuthRegisterUserAction = createAction(
  authActionsType.register,
  props<{ 
    userName: string;
    userPwd: string;
    keyword: string;
   }>()
);

export const AuthRegisterUserErrorAction = createAction(
  authActionsType.registerSuccess
);

export const AuthOpenLoginPageAction = createAction(
  authActionsType.openLoginPage
);

export const AuthOpenRemindPageAction = createAction(
  authActionsType.openRemindPage
);

export const AuthOpenRegisterPageAction = createAction(
  authActionsType.openRegisterPage
);
