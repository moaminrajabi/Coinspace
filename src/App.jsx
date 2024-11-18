import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import BitcoinChart from "./components/Chart";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Overview />}>
        <Route index element={<Main />} />
        <Route path="chart" element={<BitcoinChart />} />
      </Route>
    </Routes>
  );
}

export default App;
