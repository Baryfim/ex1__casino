import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { publicRoutes } from "./routes";
// styles
import "./styles/App.css"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Loading public routes */}
          {publicRoutes.map(page => (
            <Route path={page.path} Component={page.Component} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
