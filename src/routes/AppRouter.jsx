import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Service from "../pages/Service";
import Process from "../pages/Process";
import Contact from "../pages/Contact";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/process" element={<Process />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
