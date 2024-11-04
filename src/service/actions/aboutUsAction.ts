import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAboutUsInfo } from '../../utils/api/aboutUsApi';
import { type IAboutUsState, type IAboutUs } from '../../utils/interface/aboutUsInterface';

const aboutUsAction = createAsyncThunk<IAboutUs, IAboutUsState, { rejectValue: string }>(
  'aboutUs/getAboutUsInfo', async ( state, { rejectWithValue }) => {
    if (state.isLoaded) {
      return state.aboutUs;
    }
    try {
      const response = await getAboutUsInfo();
      if (!response.ok) {
        throw new Error('Не удалось получить информацию на главной странице.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось получить информацию на главной странице.');
    }
  },
);

export { aboutUsAction };