import { combineReducers } from "@reduxjs/toolkit";
import overviewSlice from "./overview";
import eulaReducer from "./eula.reducer";

const rootReducer = combineReducers({
  overview: overviewSlice,
  eula: eulaReducer,
});

export default rootReducer;
