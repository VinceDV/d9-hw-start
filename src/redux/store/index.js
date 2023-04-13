import { configureStore, combineReducers } from '@reduxjs/toolkit'
import mainReducer from '../reducers/mainReducer'
import joblistReducer from '../reducers/joblistReducer'

const principalReducer = combineReducers({
    cart: mainReducer,
    joblist: joblistReducer
})

const store = configureStore({
  reducer: principalReducer,
  // dobbiamo prima di poter completare la creazione dello store
  // creare la funzione reducer
})

export default store