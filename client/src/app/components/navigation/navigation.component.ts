import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthState } from '../../interfaces/auth-state';
import { LocalStorageService } from '../../services/local-storage.service';
import { AuthExitAction, AuthLoginSuccessAction, AuthShowAction } from '../../reducers/auth/auth.actions';
import { selectIsAdmin, selectIsLogin, selectUserName } from '../../reducers/auth/auth.selectors';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public name$: Observable<string>;
  public isLogin$: Observable<boolean>;
  public isAdmin$: Observable<boolean>;

  showHideSubMenu = false;

  constructor(
    private readonly store$: Store<AuthState>,
    private localStorageService: LocalStorageService,
  ) {
    this.name$ = this.store$.select(selectUserName);
    this.isLogin$ = this.store$.pipe(select(selectIsLogin));
    this.isAdmin$ = this.store$.pipe(select(selectIsAdmin));
  }

  ngOnInit() {
    const user = this.localStorageService.getItem('ad_23');
    if (user) {
      this.store$.dispatch(AuthLoginSuccessAction(JSON.parse(user)));
    }
  }

  openAuth() {
    this.store$.dispatch(AuthShowAction());
  }

  exit() {
    this.store$.dispatch(AuthExitAction());
    this.showHideSubMenu = false;
  }
}
