import { createSlice } from '@reduxjs/toolkit';
import { type IAboutUsState } from '../../utils/interface/aboutUsInterface';
import { DEFAULT_ABOUT_US } from '../../utils/constans/defaultAboutUsConstans';
import { aboutUsAction } from '../actions/aboutUsAction';
import { defaultPending } from '../../utils/slice/defaultPending';
import { defaultRejected } from '../../utils/slice/defaultRejected';

const initialState: IAboutUsState = {
  aboutUs: DEFAULT_ABOUT_US,
  isLoaded: false,
  isLoading: false,
  error: '',
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(aboutUsAction.pending, (state: IAboutUsState) => {
        defaultPending(state);
      })
      .addCase(aboutUsAction.fulfilled, (state: IAboutUsState, action) => {
        state.aboutUs = action.payload;
        state.isLoaded = true;
        state.isLoading = false;
      })
      .addCase(aboutUsAction.rejected, (state: IAboutUsState, action) => {
        defaultRejected(state, action);
      });
  },
});

export default aboutUsSlice.reducer;