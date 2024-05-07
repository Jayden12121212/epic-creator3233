import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/createStore";

export const selectEula = (state: RootState) => state.eula;

export const selectEulaData = createSelector(selectEula, (eula) => eula.eula);

export const selectConductData = createSelector(
  selectEula,
  (eula) => eula.conduct
);

export const selectIsEulaLoading = createSelector(
  selectEula,
  (eula) => eula.isEulaLoading
);

export const selectEulaError = createSelector(selectEula, (eula) => eula.error);
