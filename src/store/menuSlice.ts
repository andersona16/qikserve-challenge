import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: number;
  available: boolean;
  images?: { id: number; image: string }[];
  alcoholic?: number;
  position?: number;
  visible?: number;
  availabilityType?: string;
  sku?: string;
  modifiers?: {
    id: number;
    name: string;
    minChoices: number;
    maxChoices: number;
    items: Array<{
      id: number;
      name: string;
      price: number;
      maxChoices: number;
      visible: number;
      available: boolean;
    }>;
  }[];
}

interface Section {
  id: number;
  name: string;
  description?: string;
  position: number;
  visible: number;
  images: { id: number; image: string }[];
  items: MenuItem[];
}

interface MenuState {
  sections: Section[];
  selectedSection: number | null;
}

const initialState: MenuState = {
  sections: [],
  selectedSection: null,
};

interface SetOptionsProductsPayload {
  sections: Section[];
}

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
