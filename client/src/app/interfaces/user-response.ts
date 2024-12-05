import {User} from './user';

export interface UserResponse {
  message?: string;
  messageErr?: string;
  user?: User;
  success?: boolean;
}
