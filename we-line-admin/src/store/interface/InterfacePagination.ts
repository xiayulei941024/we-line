export interface State {
  page: {
    current: number;
    size: number;
    total: number;
  };
  showStatus: boolean;
}
export interface Mutations {
  CHANGE_CURRENT: (state: State, current: number) => void;
  CHANGE_SHOW_STATUS(state: State, bol: boolean): void;
}
