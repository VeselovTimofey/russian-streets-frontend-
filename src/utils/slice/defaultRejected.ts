import { PayloadAction } from "@reduxjs/toolkit";
import { IDefaultState } from "../interface/defaultStateInterface";

function defaultRejected(state: IDefaultState, action: PayloadAction<string | undefined>) {
  state.error = action.payload;
  state.isLoading = false;
}

export { defaultRejected };