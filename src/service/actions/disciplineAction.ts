import { createAsyncThunk } from '@reduxjs/toolkit';
import { getDisciplinesNames, getFullContentofDiscipline } from '../../utils/api/disciplineApi';
import { type IDiscipline } from '../../utils/interface/disciplineInterface';


const disciplinesNames = createAsyncThunk<IDiscipline[], void, { rejectValue: string }>(
  'discipline/getAllDisciplinesNames', async (_, { rejectWithValue }) => {
    try {
      const response = await getDisciplinesNames();
      if (!response.ok) {
        throw new Error('Не удалось получить название дисциплин.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось получить название дисциплин.');
    }
  },
);

const disciplineContent = createAsyncThunk<IDiscipline[], IDiscipline, { rejectValue: string }>(
  'discipline/getDisciplineContent', async ( discipline, { rejectWithValue }) => {
    if (discipline.isfull) {
      return [discipline];
    }
    try {
      if (discipline.name === '') {
        throw new Error('Не удалось получить дисциплину.');
      }
      const response = await getFullContentofDiscipline(discipline.name);
      if (!response.ok) {
        throw new Error('Не удалось получить дисциплину.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось получить дисциплину.');
    }
  },
);

export  { disciplinesNames, disciplineContent };