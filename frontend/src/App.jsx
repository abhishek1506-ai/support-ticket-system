import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Support Ticket System</h1>
      <p className="text-slate-600 mb-6 text-center max-w-md">
        A simple support desk to create and track customer support tickets.
      </p>
      <a
        href="/login"
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
      >
        Go to Login
      </a>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
