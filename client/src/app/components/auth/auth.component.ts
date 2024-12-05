import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { AuthState } from '../../interfaces/auth-state';
import {
  selectAuthPages,
  selectIsShowAuth,
} from '../../reducers/auth/auth.selectors';
import {
  AuthFormResetSuccessAction,
  AuthHideAction,
  AuthLoginAction,
  AuthOpenLoginPageAction,
  AuthOpenRegisterPageAction,
  AuthOpenRemindPageAction,
  AuthRegisterUserAction,
  AuthRemindPwdAction,
} from '../../reducers/auth/auth.actions';
import { Tab } from '../../interfaces/tab';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';
import { MousedownStopDirective } from '../../directives/mousedown-stop.directive';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MousedownStopDirective],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  public isShowAuth$: Observable<boolean>;

  form: FormGroup = new FormGroup({});

  loginTabs = {
    login: {
      id: 1,
      name: 'Авторизація',
      button: 'Увійти',
    },
    register: {
      id: 2,
      name: 'Реєстрація',
      button: 'Зареєструватись',
    },
    remind: {
      id: 3,
      name: 'Забули пароль',
      button: 'Надіслати',
    },
  };

  currentTab = {
    tab: this.loginTabs.login,
  };

  constructor(
    private store$: Store<AuthState>,
    private modalService: NgbModal
  ) {
    this.isShowAuth$ = this.store$.select(selectIsShowAuth);
  }

  ngOnInit() {
    this.open(this.loginTabs.login);
    this.store$.select(selectIsShowAuth).subscribe((status) => {
      if (status) {
        this.form.reset();
        this.currentTab.tab = this.loginTabs.login;
        this.store$.dispatch(AuthFormResetSuccessAction());
      }
    });
    this.store$
      .select(selectAuthPages)
      .subscribe((page) => this.open(this.loginTabs[page]));
  }

  isActive(tab: Tab): boolean {
    if (!tab) {
      return false;
    }
    return this.currentTab.tab === tab;
  }

  open(tab: Tab): void {
    if (!tab) {
      return;
    }
    this.currentTab.tab = tab;
    this.form.reset();
    this.form = new FormGroup({
      userName: new FormControl('', [
        Validators.minLength(3),
        Validators.required,
      ]),
      password: new FormControl(
        '',
        this.currentTab.tab === this.loginTabs.login ||
        this.currentTab.tab === this.loginTabs.register
          ? [Validators.minLength(3), Validators.required]
          : null
      ),
      confirmPassword: new FormControl(
        '',
        this.currentTab.tab === this.loginTabs.register
          ? [Validators.minLength(3), Validators.required]
          : null
      ),
      keyword: new FormControl(
        '',
        this.currentTab.tab === this.loginTabs.register ||
        this.currentTab.tab === this.loginTabs.remind
          ? [Validators.minLength(3), Validators.required]
          : null
      ),
    });
  }

  submit() {
    if (!this.form.valid) {
      const modalRef = this.modalService.open(ModalComponent, {
        backdrop: false,
      });
      modalRef.componentInstance.message = 'Форма заповнена невірно';
      return modalRef;
    }

    switch (this.currentTab.tab) {
      case this.loginTabs.login:
        return this.login();
      case this.loginTabs.register:
        return this.register();
      case this.loginTabs.remind:
        return this.remind();
    }
  }

  login(): void {
    this.store$.dispatch(
      AuthLoginAction({
        userName: this.form.get('userName')?.value,
        userPwd: this.form.get('password')?.value,
      })
    );
  }

  register(): void {
    if (
      this.form.get('password')?.value !==
      this.form.get('confirmPassword')?.value
    ) {
      const modalRef = this.modalService.open(ModalComponent, {
        backdrop: false,
      });
      modalRef.componentInstance.message = 'Паролі не співпадають';
      return;
    }
    this.store$.dispatch(
      AuthRegisterUserAction({
        userName: this.form.get('userName')?.value,
        userPwd: this.form.get('password')?.value,
        keyword: this.form.get('keyword')?.value,
      })
    );
  }

  remind() {
    this.store$.dispatch(
      AuthRemindPwdAction({
        userName: this.form.get('userName')?.value,
        keyword: this.form.get('keyword')?.value,
      })
    );
  }

  hide(): void {
    this.store$.dispatch(AuthHideAction());
    this.form.reset();
  }

  openLoginPage() {
    this.store$.dispatch(AuthOpenLoginPageAction());
  }

  openRemindPage() {
    this.store$.dispatch(AuthOpenRemindPageAction());
  }

  openRegisterPage() {
    this.store$.dispatch(AuthOpenRegisterPageAction());
  }
}
