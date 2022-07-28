import React from "react";
import "./index.css";
import "./App.css";
import NoMatch from "./pages/NoMatch";
import FirstForm from "./pages/FirstForm";
import SecondForm from "./pages/SecondForm";
import { Routes, Route } from "react-router-dom";
import ThirdForm from "./pages/ThirdForm";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<FirstForm />} />
        <Route path="/secondform" element={<SecondForm />} />
        <Route path="/thirdform" element={<ThirdForm state={null} />} />
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;

