import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';

import { UserService } from 'src/app/services/user.service';

import * as userActions from '../actions';
import { LoadUserSuccess, LoadUserFail } from '../actions';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private userService: UserService) {}

  @Effect()
  loadUser$ = this.actions$.pipe(
    ofType(userActions.LOAD_USER),
    switchMap(action => {
      const id = action['payload']['userId'];

      return this.userService.getUserById(id).pipe(
        map(user => new LoadUserSuccess({ user })),
        catchError(error => of(new LoadUserFail({ error })))
      );
    })
  );
}
