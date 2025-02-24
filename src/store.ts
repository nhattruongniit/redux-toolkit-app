import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from './redux/app.api';

import { appSlice } from './redux/app.slice';

const rootReducer = combineReducers({
    app: appSlice.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
})

export default configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})