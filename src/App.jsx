import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
// import Home from "./pages/home";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Photos from "./pages/Photos";
import Posts from "./pages/Posts";
console.log(About);
// import About from "./pages/about";
function App() {
  const roter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
        <Route path="/posts" element={<Posts />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={roter} />;
}

export default App;
