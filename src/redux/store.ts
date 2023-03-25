import { combineReducers, configureStore } from "@reduxjs/toolkit";
import charactersReducer from "./characters-reducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
   characters: charactersReducer,
});


const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER]
      }
    })
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

export const persistor = persistStore(store)
export default store
