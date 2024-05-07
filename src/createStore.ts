import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./slices";

const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [HYDRATE],
        },
      }),
  });

export type RootState = ReturnType<ReturnType<typeof makeStore>["getState"]>;
export const withReduxWrapper = createWrapper(makeStore);
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"];
