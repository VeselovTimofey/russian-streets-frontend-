import { createAsyncThunk } from '@reduxjs/toolkit';
import { getLastNews, getPageNews, getNews } from '../../utils/api/newsApi';
import { type INews, type IAnswerNewsAction } from '../../utils/interface/newsInterface';

const lastNewsAction = createAsyncThunk<INews[], void, { rejectValue: string }>(
  'news/getLastNews', async (_, { rejectWithValue }) => {
    try {
      const response = await getLastNews();
      if (!response.ok) {
        throw new Error('Не удалось загрузить последние новости.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить последние новости.');
    }
  },
);

const pageNewsAction = createAsyncThunk<INews[], { page: number }, { rejectValue: string }>(
  'news/getPageNews', async ({ page }, { rejectWithValue }) => {
    try {
      const response = await getPageNews(page);
      if (!response.ok) {
        throw new Error('Не удалось загрузить страницу с новостями.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить страницу с новостями.');
    }
  },
);

const newsAction = createAsyncThunk<IAnswerNewsAction, { id: string, saveNewsId: string[] }, { rejectValue: string }>(
  'news/getNews', async ({ id, saveNewsId }, { rejectWithValue }) => {
    if (id in saveNewsId) {
      return { id: id, alreadyInStore: true };
    }
    try {
      const response = await getNews(id);
      if (!response.ok) {
        throw new Error('Не удалось загрузить новость.');
      }
      const data = await response.json();
      return { news: data, alreadyInStore: false };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось загрузить новость.');
    }
  },
);

export { lastNewsAction, pageNewsAction, newsAction };