import { combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import activePageReducer from "./slices/activePageSlice";
import searchReducer from "./slices/searchSlice";
import comicsReducer from "./slices/comicsSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  activePage: activePageReducer,
  search: searchReducer,
  comics: comicsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
});

export const persistor = persistStore(store);
