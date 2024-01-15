import React from 'react';
import {RouterProvider } from 'react-router-dom';
import Router from "./routes/index"

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
