import { DefaultTheme, Theme } from '@react-navigation/native';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { Theme } from '../types'; // Adjust the import path as needed
// import DefaultTheme from './DefaultTheme'; // Adjust the import path as needed

interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: DefaultTheme, // Set the default theme
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export const selectTheme = (state: { theme: ThemeState }) => state.theme.value;
export default themeSlice.reducer;
