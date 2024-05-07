import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/createStore";

export const selectOverview = (state: RootState) => state.overview;

export const selectBackgroundImage = createSelector(
  selectOverview,
  (overview) => overview.backgroundImage
);

export const selectTitle = createSelector(
  selectOverview,
  (overview) => overview.title
);

export const selectDescription = createSelector(
  selectOverview,
  (overview) => overview.description
);

export const selectBenefits = createSelector(
  selectOverview,
  (overview) => overview.benefits
);

export const selectFaqs = createSelector(
  selectOverview,
  (overview) => overview.faqs
);

export const selectIsLoading = createSelector(
  selectOverview,
  (overview) => overview.isLoading
);

export const selectError = createSelector(
  selectOverview,
  (overview) => overview.error
);
