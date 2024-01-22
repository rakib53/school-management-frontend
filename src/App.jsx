import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/Signin";
import Signup from "./pages/Signup";
import Sidebar from "./pages/Sidebar";
import useAuthCheck from "./hook/useAuthCheck";
import SubjectWidget from "./pages/Subject/SubjectWidget";
import NoteWidget from "./pages/Subject/NoteWidget";

export default function App() {
  const isAuth = useAuthCheck();
  console.log(isAuth);

  return !isAuth ? (
    <h1>Loading...</h1>
  ) : (
    <main className="layout">
      <Sidebar />
      <div className="content-area">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/subjects/subjectwidget" element={<SubjectWidget />} />
          <Route path="/subjects/notewidget" element={<NoteWidget />} />
        </Routes>
      </div>
    </main>
  );
}
