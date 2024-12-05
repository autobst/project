import {User} from './user';

export interface PostState {
  section: string;
  subsection: string;
  title: string;
  chrome: string;
  opera: string;
  firefox: string;
  safari: string;
  edge: string;
  explorer: string;
  chromeOwn?: string;
  operaOwn?: string;
  firefoxOwn?: string;
  safariOwn?: string;
  edgeOwn?: string;
  explorerOwn?: string;
  author?: string;
  content: string;
  isActive: boolean;
  created: string;
  user?: User;
}
