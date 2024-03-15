import { makeAutoObservable } from "mobx";

const STORAGE_USER_KEY = "User";
const isAuth_User_Key = "isAuth";

export default class UserStore {
  constructor() {
    this._isAuth = JSON.parse(localStorage.getItem(STORAGE_USER_KEY) || false);
    this._user = JSON.parse(localStorage.getItem(STORAGE_USER_KEY) || "[]");
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
    localStorage.setItem(isAuth_User_Key, JSON.stringify(this._isAuth));
  }
  setUser(user) {
    this._user = user;
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(this._user));
  }

  get isAuth() {
    return this._isAuth;
  }
  get user() {
    return this._user;
  }
}
