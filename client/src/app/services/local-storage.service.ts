import { Injectable } from '@angular/core';
import * as CryptoTs from 'crypto-ts';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string) {
    if (!key || !localStorage.getItem(key)) {
      return;
    }
    const encryptedValue = localStorage.getItem(key);
    if (encryptedValue) {
      return CryptoTs.AES.decrypt(encryptedValue, 'autobst').toString(CryptoTs.enc.Utf8);
    } else {
      return;
    }
  }

  setItem(key: string, value: string) {
    if (!key || !value) {
      return;
    }
    localStorage.setItem(key, CryptoTs.AES.encrypt(value, 'autobst').toString());
  }

  removeItem(key: string) {
    if (!key) {
      return;
    }
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
