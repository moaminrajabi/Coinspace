import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";
import BitcoinChart from "./components/Chart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />}>
          <Route path="chart" element={<BitcoinChart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
