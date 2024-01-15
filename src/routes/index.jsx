import { createBrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/Home"
import About from "../pages/About"

 const Router = createBrowserRouter([
    <Routes>
      <Route path="/" element={<h1>Ggggg</h1>} />
      <Route path="/about" element={<About />} />
    </Routes>
]);

export default Router;