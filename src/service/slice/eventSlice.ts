import { createSlice } from '@reduxjs/toolkit';
import { type IEventState } from '../../utils/interface/eventInterface';
import { DEFAULT_EVENT } from '../../utils/constans/defaultEventConstans';
import { lastEventsAction, dailyEventsAction, eventAction } from '../actions/eventAction';
import { defaultPending } from '../../utils/slice/defaultPending';
import { defaultRejected } from '../../utils/slice/defaultRejected';

const initialState: IEventState = {
  lastEvents: [ DEFAULT_EVENT ],
  dayEvents: [ DEFAULT_EVENT ],
  currentEvent: DEFAULT_EVENT,
  savedEventsId: [],
  events: [ DEFAULT_EVENT ],
  isLoading: false,
  error: '',
};

const eventSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(lastEventsAction.pending, (state: IEventState) => {
        defaultPending(state);
      })
      .addCase(lastEventsAction.fulfilled, (state: IEventState, action) => {
        state.lastEvents = [];
        action.payload.forEach((newEvent) => {
          const { id, name, description, imageUrl, place, startDate } = newEvent;
          state.lastEvents.push({ id, name, description, imageUrl, place, startDate });
          if (!state.savedEventsId.includes(id)) {
            state.events.push(newEvent);
            state.savedEventsId.push(id);
          }
        });
        state.isLoading = false;
      })
      .addCase(lastEventsAction.rejected, (state: IEventState, action) => {
        defaultRejected(state, action);
      })
      .addCase(dailyEventsAction.pending, (state: IEventState) => {
        defaultPending(state);
      })
      .addCase(dailyEventsAction.fulfilled, (state: IEventState, action) => {
        state.dayEvents = [];
        action.payload.forEach((newEvent) => {
          const { id, name, description, imageUrl, place, discipline } = newEvent;
          state.dayEvents.push({ id, name, description, imageUrl, place, discipline });
          if (!state.savedEventsId.includes(id)) {
            state.events.push(newEvent);
            state.savedEventsId.push(id);
          }
        });
        state.isLoading = false;
      })
      .addCase(dailyEventsAction.rejected, (state: IEventState, action) => {
        defaultRejected(state, action);
      })
      .addCase(eventAction.pending, (state: IEventState) => {
        defaultPending(state);
      })
      .addCase(eventAction.fulfilled, (state: IEventState, action) => {
        if (action.payload.alreadyInStore) {
          state.currentEvent = state.events.find(event => event.id === action.payload.id);
        } else {
          state.currentEvent = action.payload.event;
        }
      })
      .addCase(eventAction.rejected, (state: IEventState, action) => {
        defaultRejected(state, action);
      });
  },
});

export default eventSlice.reducer;