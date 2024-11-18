import React from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "./pages/Overview";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </div>
  );
}

export default App;
