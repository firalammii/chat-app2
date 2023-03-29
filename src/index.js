import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";

import store from "./store/store";

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <Provider store={store}>

            <StrictMode>
                <App />
            </StrictMode>

        </Provider>

);