import { HYDRATE } from "next-redux-wrapper";
import { OverviewState } from "@/types";
import { createSlice, AnyAction } from "@reduxjs/toolkit";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { getOverviewThunk } from "@/thunks";

const initialState: OverviewState = {
  backgroundImage: "",
  title: "",
  description: "",
  benefits: [],
  faqs: [],
  isLoading: false,
  error: null,
};

const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {
    getOverviewStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },

    getOverviewSuccess: (state, action) => {
      state.backgroundImage = action.payload.backgroundImage;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.benefits = action.payload.benefitRef.map((benefitRef) => ({
        title: benefitRef.fields.title,
        description: documentToHtmlString(benefitRef.fields.description),
      }));
      state.faqs = action.payload.faqRef.map((faqRef) => ({
        question: faqRef.fields.question,
        answer: documentToHtmlString(faqRef.fields.answer),
        anchor: faqRef.fields.anchor,
      }));
      state.isLoading = false;
      state.error = null;
    },

    getOverviewFailure: (state, action) => {
      state.isLoading = false;
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

    builder.addCase(getOverviewThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getOverviewThunk.fulfilled, (state, action: AnyAction) => {
      state.isLoading = false;
      state.backgroundImage = action.payload.backgroundImage;
      state.title = action.payload.title;
      state.description = action.payload.description;
      state.benefits = action.payload.benefitRef.map((benefitRef) => ({
        title: benefitRef.fields.title,
        description: documentToHtmlString(benefitRef.fields.description),
      }));
      state.faqs = action.payload.faqRef.map((faqRef) => ({
        question: faqRef.fields.question,
        answer: documentToHtmlString(faqRef.fields.answer),
        anchor: faqRef.fields.anchor,
      }));
    });

    builder.addCase(getOverviewThunk.rejected, (state, action: AnyAction) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { getOverviewStart, getOverviewSuccess, getOverviewFailure } =
  overviewSlice.actions;

export default overviewSlice.reducer;
