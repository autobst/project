import {createFeatureSelector, createSelector} from '@ngrx/store';
import {authNode} from './auth.reducer';
import {AuthState} from '../../interfaces/auth-state';
import {authPages} from './auth.actions';
import {User} from '../../interfaces/user';

export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);

export const selectIsShowAuth = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isShowAuth
);

export const selectIsLogin = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isLogin
);

export const selectUserName = createSelector(
  selectAuthFeature,
  (state: AuthState): string => state.userName
);

export const selectUserPwd = createSelector(
  selectAuthFeature,
  (state: AuthState): string => state.userPwd
);

export const selectIsAdmin = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isAdmin
);

export const selectFormReset = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.formReset
);

export const selectAuthPages = createSelector(
  selectAuthFeature,
  (state: AuthState): authPages => state.currentPage
);

export const selectAuthUser = createSelector(
  selectAuthFeature,
  (state: AuthState): User => {
    return {
      userName: state.userName,
      userPwd: state.userPwd,
    };
  }
);
