import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { LanguageShortName } from '../../app/supportedLanguages';
import { MessageModel } from './MessageModel';
import { fetchTranslation } from './messagingAPI';

export interface MessagingState {
  messages: MessageModel[];
  currentSelectedLanguage: LanguageShortName
}

const initialState: MessagingState = {
  messages: [],
  currentSelectedLanguage: "fr"
};


export const getTranslationAsync = createAsyncThunk(
  'messaging/translate',
  async (message: string) => {
    const response = await fetchTranslation(message);
    return response;
  }
);

export const messagingSlice = createSlice({
  name: 'messaging',
  initialState,
  reducers: {
    postMessage: {
        reducer: (state, action: PayloadAction<MessageModel>) => {
            state.messages = [...state.messages, action.payload]
        },
        prepare: (value: string) => {
            const date: number = new Date().getTime()
            const lang : LanguageShortName = 'fr'
            //const messageData = new MessageModel(message, 'fr')
            return { payload: { value, lang, date} }
        }
    },
    changeLanguage: (state, action: PayloadAction<LanguageShortName>) => {
        state.currentSelectedLanguage = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTranslationAsync.pending, (state) => {
        //state.status = 'loading';
      })
      .addCase(getTranslationAsync.fulfilled, (state, action) => {
        //state.status = 'idle';
        //state.value += action.payload;
      });
  },
});

export const { postMessage, changeLanguage } = messagingSlice.actions;


export const selectCurrentLanguage = (state: RootState) => state.messaging.currentSelectedLanguage;

export const selectAllMessages = (state: RootState) => state.messaging.messages;

export const selectTranslatedMessages = (state: RootState) => state.messaging.messages.filter((message) => {
   
});


export default messagingSlice.reducer;
