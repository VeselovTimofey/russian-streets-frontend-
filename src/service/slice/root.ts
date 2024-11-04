import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import disciplineSlice from './disciplineSlice';
import newsSlice from './newsSlice';
import eventSlice from './eventSlice';
import aboutUsSlice from './aboutUsSlice';

export const rootReducer = combineReducers({
  user: userSlice,
  discipline: disciplineSlice,
  news: newsSlice,
  event: eventSlice,
  aboutUs: aboutUsSlice,
});