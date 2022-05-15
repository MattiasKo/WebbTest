import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./index.css";
import "./js/appmodal.js";
import { Myportfolio } from "./components/Myportfolio";
import { MyCalendar } from "./components/MyCalendar";
import { Register } from "./components/Register";
import { CvTest1 } from "./components/CvTest";



function App() {
  return (

    <div className="App">
      <h1 className="logo">Mattias kokkonen</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/other" element={<Other />} />
        <Route path="/cvtext" element={<CvTest1 />} />
      </Routes>
    </div>
  );
}
function Home() {
  return (
    <>
      <div className="navigation">
        <nav >
          <ul className="my-list">
            <li className="selected"><h2>Home</h2></li>
            <li>
              <Link to="/about"><h2>Portfolio</h2></Link>
            </li>
            <li>
              <Link to="/other"><h2>Övrigt</h2></Link>
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <div className="flexcontainer">
          <div><h2>Välkommen till min hemsida</h2>
            Denna hemsida är gjord i react som använder sig av en syntax som heter JSX. Krångligt men kul.
            <p>Jag har programmerat nu i ett år och det känns bra. Det är kul men dock mycket att lära sig.</p>

          </div>
          <div>
            <h2>Mattias Kokkonens CV;</h2>
            <CvTest1 />
          </div>
        </div>
      </main>
      <Bottenfot />
    </>
  );
}
function About() {
  return (
    <>
      <nav className="navigation">
        <ul className="my-list">
          <li>
            <Link to="/"><h2>Home</h2></Link>
          </li>
          <li className="selected"><h2>Portfolio</h2></li>
          <li>
            <Link to="/other"><h2>Övrigt</h2></Link>
          </li>
        </ul>
      </nav>
      <main>
        <div className="flexcontainer">
          <div>
            <Myportfolio />
          </div>
        </div>
      </main>
      <Bottenfot />
    </>
  );
}
function Other() {
  return (
    <>
      <nav className="navigation">
        <ul className="my-list">
          <li>
            <Link to="/"><></><h2>Home</h2></Link>
          </li>
          <li>
            <Link to="/about"><h2>Portfolio</h2></Link>
          </li>
          <li className="selected"><h2>Övrigt</h2></li>
        </ul>
      </nav>
      <main>

        <div className="flexcontainer">
          <div>
            <h2>Övrigt</h2>
            <MyCalendar />
            <Register />
          </div>
        </div>
      </main>
      <Bottenfot />
    </>
  );
}
function Bottenfot() {

  return (

    <div style={{
      color: "rgb(255, 150, 0)",
      textAlign: "center"
    }}><p>Mattias Kokkonen 2022</p></div>
  )
}
export default App;
