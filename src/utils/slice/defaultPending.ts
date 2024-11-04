import { type IDefaultState } from "../interface/defaultStateInterface";

function defaultPending(state: IDefaultState) {
  state.error = '';
  state.isLoading = true;
}

export { defaultPending };