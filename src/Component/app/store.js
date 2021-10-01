import {configureStore} from "@reduxjs/toolkit";

import {cryptoApi} from "../cryptoApi";
import {cryptoNewsApi} from "../CryptoNewsApi";
export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    
})