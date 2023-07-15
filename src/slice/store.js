import notesSlice from './slice'
import {configureStore} from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{notesSlice
},
    });
export default store;