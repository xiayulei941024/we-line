export interface State {
  token: string;
}
export interface Mutations {
  CHANGE_TOKEN: (state: State, token: string) => void;
}
