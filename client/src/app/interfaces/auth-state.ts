import {authPages} from '../reducers/auth/auth.actions';

export interface AuthState {
  isShowAuth: boolean;
  isLogin: boolean;
  userName: string;
  userPwd: string;
  isAdmin: boolean;
  formReset: boolean;
  currentPage: authPages;
}
