import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WebSettings {
  bannerImage: string;
  navBackgroundColour: string;
  primaryColour: string;
  backgroundColour: string;
  primaryColourHover: string;
}

interface ThemeState {
  theme: WebSettings | null;
  loading: boolean;
}

const initialState: ThemeState = {
  theme: null,
  loading: true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<WebSettings>) {
      state.theme = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setTheme, setLoading } = themeSlice.actions;

export default themeSlice.reducer;
