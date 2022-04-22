import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {Dashboard, Landing, Error, Register} from "./pages/index"

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Dashboard</Link>
      <Link to="/register">Register</Link>
      <Link to="/landing">Landing</Link>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
