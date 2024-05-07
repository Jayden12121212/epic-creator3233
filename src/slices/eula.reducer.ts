import { HYDRATE } from "next-redux-wrapper";
import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { getEulaThunk } from "@/thunks";

interface EulaState {
  eula: {};
  conduct: {};
  isEulaLoading: boolean;
  error: string | null;
}

const initialState: EulaState = {
  eula: {},
  conduct: {},
  isEulaLoading: false,
  error: null,
};

const eulaSlice = createSlice({
  name: "eula",
  initialState,
  reducers: {
    getEulaStart(state) {
      state.isEulaLoading = true;
      state.error = null;
    },
    getEulaSuccess(state, action) {
      state.isEulaLoading = false;
      state.eula = action.payload;
    },
    getEulaFailure(state, action) {
      state.isEulaLoading = false;
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.header,
      };
    });

    builder.addCase(getEulaThunk.pending, (state) => {
      state.isEulaLoading = true;
      state.error = null;
    });

    builder.addCase(getEulaThunk.fulfilled, (state, action: AnyAction) => {
      state.isEulaLoading = false;
      state.eula = action.payload;
    });

    builder.addCase(getEulaThunk.rejected, (state, action: AnyAction) => {
      state.isEulaLoading = false;
      state.error = action.payload;
    });
  },
});

export const { getEulaStart, getEulaSuccess, getEulaFailure } =
  eulaSlice.actions;

export default eulaSlice.reducer;
