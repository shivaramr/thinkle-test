import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DefaultPage from "./pages/DefaultPage";
import ContentLibrary from "./pages/ContentLibrary";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import withContentBody from "./utils/hooks/withContentBody";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="content-main">
        <SideBar />
        <Routes>
          <Route path="/" element={withContentBody(Home)()} />
          <Route path="/*" element={withContentBody(DefaultPage)()} />
          <Route path="/contentLib" element={withContentBody(ContentLibrary)()} />
        </Routes>
      </div>
    </>
  );
}

export default App;
