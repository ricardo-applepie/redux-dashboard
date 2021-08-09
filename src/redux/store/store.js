import { configureStore } from '@reduxjs/toolkit';
import dummydata from "../reducers/dummydata"
export default configureStore({
    reducer: {
        dummydata: dummydata
    },
})