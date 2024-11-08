import { combineReducers, configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./expense/expenseSlice";
import incomeSlice from "./income/incomeSlice";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* export const store = configureStore({
  reducer: {
    EXPENSE: expenseSlice,
    INCOME: incomeSlice,
  },
}); */

const rootReducer = combineReducers({
  EXPENSE: expenseSlice,
  INCOME: incomeSlice,
});

const persistConfig = {
  key: "root",
  storage: storage,
};
const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistedStore = persistStore(store);

export { store, persistedStore };
