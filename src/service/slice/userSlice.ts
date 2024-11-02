import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IUserState, IRegistrationData } from '../../utils/interface/userInterface';
import { userSignUp, userSignIn } from '../actions/userActions';
import { defaultPending } from '../../utils/slice/defaultPending';
import { defaultRejected } from '../../utils/slice/defaultRejected';

const initialState: IUserState = {
  registrationData: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    mailing: false,
    agreement: false,
  },
  user: {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  },
  isLoading: false,
  auth: false,
  error: '',
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registrationDataChange: (state, action: PayloadAction<Partial<IRegistrationData>>) => {
      Object.assign(state.registrationData, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userSignUp.pending, (state: IUserState) => {
        defaultPending(state);
        state.auth = false;
      })
      .addCase(userSignUp.fulfilled, (state: IUserState, action) => {
        state.user = action.payload;
        state.auth = true;
        state.isLoading = false;
      })
      .addCase(userSignUp.rejected, (state: IUserState, action) => {
        defaultRejected(state, action);
      })
      .addCase(userSignIn.pending, (state: IUserState) => {
        defaultPending(state);
        state.auth = false;
      })
      .addCase(userSignIn.fulfilled, (state: IUserState, action) => {
        state.user = action.payload;
        state.auth = true;
        state.isLoading = false;
      })
      .addCase(userSignIn.rejected, (state: IUserState, action) => {
        defaultRejected(state, action);
      });
  },
});

export default userSlice.reducer;
export const { registrationDataChange } = userSlice.actions;