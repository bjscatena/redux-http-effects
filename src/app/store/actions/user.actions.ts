import { Action } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const LOAD_USER = '[Users] Load user';
export const LOAD_USER_FAIL = '[Users] Load user fail';
export const LOAD_USER_SUCCESS = '[Users] Load user success';

export class LoadUser implements Action {
  readonly type = LOAD_USER;
  constructor(public payload: { userId: string }) {}
}

export class LoadUserFail implements Action {
  readonly type = LOAD_USER_FAIL;
  constructor(public payload: { error: any }) {}
}

export class LoadUserSuccess implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: { user: User }) {}
}

export type UserActions = LoadUser | LoadUserFail | LoadUserSuccess;
