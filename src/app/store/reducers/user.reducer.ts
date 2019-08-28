import { User } from 'src/app/models/user.model';

import * as fromUser from '../actions';

export interface UserState {
  user: User;
  loaded: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  user: null,
  loaded: false,
  isLoading: false,
  error: null
};

export function userReducer(
  state = initialState,
  action: fromUser.UserActions
): UserState {
  switch (action.type) {
    case fromUser.LOAD_USER:
      return {
        ...state,
        isLoading: true
      };

    case fromUser.LOAD_USER_SUCCESS:
      return {
        ...state,
        loaded: true,
        isLoading: false,
        user: { ...action.payload.user }
      };

    case fromUser.LOAD_USER_FAIL:
      return {
        ...state,
        loaded: false,
        isLoading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
