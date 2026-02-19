import Data from "../Components/Data";
import FormComponent from "../Components/FormComponent";
import Navbar from "../Components/Navbar";
import ApiHandler from "../services/ApiHandler";
import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div>
      <ApiHandler />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<FormComponent />} />
        <Route path="/profile" element={<Data />} />
      </Routes>
    </div>
  );
}

export default Home;
