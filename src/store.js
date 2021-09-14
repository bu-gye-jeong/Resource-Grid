import { configureStore } from "@reduxjs/toolkit";
import saveReducer, {
  initialState as saveInitialState,
} from "./slices/saveSlice";
import { mergeObject } from "./utils/merge";
import throttle from "lodash/throttle";

const persistedState = JSON.parse(
  localStorage.getItem("Resource-Grid") || "{}"
);

const store = configureStore({
  reducer: {
    save: saveReducer,
  },
  preloadedState: mergeObject(persistedState, { save: saveInitialState }),
});

store.subscribe(
  throttle(() =>
    localStorage.setItem("Resource-Grid", JSON.stringify(store.getState()))
  )
);

export default store;
