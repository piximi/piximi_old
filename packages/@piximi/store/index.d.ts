import * as actions from './src/actions/classifier';
import { StateType, ActionType } from 'typesafe-actions';

export type RootAction = ActionType<typeof actions>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}
