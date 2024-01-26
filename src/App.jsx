import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Sidebar from "./pages/Sidebar";
import useAuthCheck from "./hook/useAuthCheck";
import SubjectWidget from "./pages/Subject/SubjectWidget";
import NoteWidget from "./pages/Subject/NoteWidget";
import CreateAssignment from "@pages/Create_assignment";
import AuthProtected from "./routes/AuthProtected";
import Navbar from "./components/Navbar";

export default function App() {
  const isAuth = useAuthCheck();

  return !isAuth ? (
    <h1>Loading...</h1>
  ) : (
    <main className="layout">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="content-area p-4">
          <Routes>
            <Route
              exact
              path="/dashboard"
              element={
                <AuthProtected>
                  <Dashboard />
                </AuthProtected>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/assignment" element={<About />} />
            <Route
              path="/create-assignment"
              element={
                <AuthProtected>
                  <CreateAssignment />
                </AuthProtected>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </main>
  );
}
