import {Provider} from "react-redux";
import App from "./App";
import React from "react";
import store from "./slice/store";
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)


