import { User } from 'src/app/models/user.model';

import * as fromUsers from '../actions';

export interface UsersState {
  users: User[];
  loaded: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  loaded: false,
  isLoading: false,
  error: null
};

export function usersReducer(
  state = initialState,
  action: fromUsers.Actions
): UsersState {
  switch (action.type) {
    case fromUsers.LOAD_USERS:
      return {
        ...state,
        isLoading: true
      };

    case fromUsers.LOAD_USERS_SUCCESS:
      return {
        ...state,
        loaded: true,
        isLoading: false,
        users: [...action.payload.users]
      };

    case fromUsers.LOAD_USERS_FAIL:
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
