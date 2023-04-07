import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import ContextProvider from "./context-API/ContextProvider";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root'))
    .render(

        <ContextProvider>
            <StrictMode>
                <App />
            </StrictMode>
        </ContextProvider>
    );