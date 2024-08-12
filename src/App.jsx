import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import Info from "./components/Info";
import Input from "./components/Input";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Input />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
