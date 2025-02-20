import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this import is correct!
import "./index.css"; 
// Ensure this runs after App is properly imported
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


export default App; 