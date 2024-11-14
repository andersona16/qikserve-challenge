import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  images?: { id: number; image: string }[];
}

interface Section {
  id: number;
  name: string;
}

interface SetOptionsProductsPayload {
  sections: Section[];
}

interface MenuState {
  sections: Section[];
  selectedSection: number | null;
  cart: CartItem[];
}

const initialState: MenuState = {
  sections: [],
  selectedSection: null,
  cart: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setOptionsProducts: (
      state,
      action: PayloadAction<SetOptionsProductsPayload>
    ) => {
      const sections = action.payload.sections;
      state.sections = sections;
    },
    setSelectedSection: (state, action: PayloadAction<number | null>) => {
      state.selectedSection = action.payload;
    },
  },
});

export const { setOptionsProducts, setSelectedSection } = menuSlice.actions;
export default menuSlice.reducer;
