import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export type State = {
  id: number;
  name: string;
  email: string;
} | undefined;



export const initialState: State = undefined;

export const reducer = createReducer(
  initialState,

  on(AuthActions.loadAuths, state => state),
  on(AuthActions.loadAuthsSuccess, (state, action) => state),
  on(AuthActions.loadAuthsFailure, (state, action) => state),

);
