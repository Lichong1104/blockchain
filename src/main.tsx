import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Layouts from "./layouts";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";
import Registered from "./pages/registered";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registered" element={<Registered />} />
        <Route path="/admin/*" element={<App />} />
      </Routes>
    </Router>
  </ConfigProvider>
);
