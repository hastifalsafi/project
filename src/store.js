import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Action_type } from "./factsAction";
const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: true, error: true },
  reducers: {
    loadingtrue: (state, action) => {
      switch (action.type) {
        case Action_type.fetch_success:
          return { loading: false, error: false };
        case Action_type.fetch_error:
          return { loading: true, error: true };
        default:
          return { state };
      }
    },
  },
});
const addclienttrue = createSlice({
  name: "addclient",
  initialState: { addclient: false },
  reducers: {
    addclientredux: (state, action) => {
      switch (action.type) {
        case Action_type.add_client:
          return { addclient: true };
      }
    },
  },
});
export const { loadingtrue } = loadingSlice.actions;
export const { addclientredux } = addclienttrue.actions;
export const store = configureStore({
  reducer: {
    loading: loadingSlice.reducer,
    addclient: addclienttrue.reducer,
  },
});
