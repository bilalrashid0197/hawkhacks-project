import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { AuthProvider } from "@propelauth/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider authUrl={"https://4038337.propelauthtest.com"}>
        <App/>
    </AuthProvider>,
    document.getElementById("root")
);
