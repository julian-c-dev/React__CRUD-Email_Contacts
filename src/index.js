import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App tab="home" />);
