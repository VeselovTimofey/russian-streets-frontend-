import { createSlice } from '@reduxjs/toolkit';
import { type IDisciplineState } from '../../utils/interface/disciplineInterface';
import { disciplinesNames, disciplineContent } from '../actions/disciplineAction';
import { DEFAULT_DISCIPLINE } from '../../utils/constans/defaultDisciplineConstans';
import { defaultPending } from '../../utils/slice/defaultPending';
import { defaultRejected } from '../../utils/slice/defaultRejected';


const initialState: IDisciplineState = {
  disciplines: [ DEFAULT_DISCIPLINE ],
  currentDiscipline: {
    name: '',
    imagesUrl: [''],
    description: '',
    rules: '',
  },
  isLoading: false,
  error: '',
};

const disciplineSlice = createSlice({
  name: 'discipline',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(disciplinesNames.pending, (state: IDisciplineState) => {
        defaultPending(state);
      })
      .addCase(disciplinesNames.fulfilled, (state: IDisciplineState, action) => {
        state.disciplines = [];
        action.payload.forEach((element) => {
          state.disciplines.push({
            name: element.name,
            imagesUrl: [''],
            description: '',
            rules: '',
            isfull: false,
            isCurrentDiscipline: false,
          });
        });
        state.isLoading = false;
      })
      .addCase(disciplinesNames.rejected, (state: IDisciplineState, action) => {
        defaultRejected(state, action);
      })
      .addCase(disciplineContent.pending, (state: IDisciplineState) => {
        defaultPending(state);
        if (state.currentDiscipline.name != '') {
          const disciplineIndex = state.disciplines.findIndex(discipline => discipline.name === state.currentDiscipline.name);
          state.disciplines[disciplineIndex].isCurrentDiscipline = false;
        }
      })
      .addCase(disciplineContent.fulfilled, (state: IDisciplineState, action) => {
        const disciplineIndex = state.disciplines.findIndex(discipline => discipline.name === action.payload[0].name);
        if (state.disciplines[disciplineIndex].isfull) {
          state.currentDiscipline = state.disciplines[disciplineIndex];
          state.disciplines[disciplineIndex].isCurrentDiscipline = true;
        } else {
          state.currentDiscipline = state.disciplines[disciplineIndex] = action.payload[0];
          state.disciplines[disciplineIndex].isfull = true;
          state.disciplines[disciplineIndex].isCurrentDiscipline = true;
        }
        state.isLoading = false;
      })
      .addCase(disciplineContent.rejected, (state: IDisciplineState, action) => {
        defaultRejected(state, action);
      });
  },
});
export default disciplineSlice.reducer;