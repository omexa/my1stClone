import { useState } from "react";
import "./App.css";
import RightSide from "./components/rightSide";
import Nav from "./nav";
import MainPage from "./components/mainPage";
import MoboNav from "./moboNav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="sm:h-screen grid grid-rows-[auto_1fr] relative max-sm:grid-rows-[auto_1fr_auto]">
      <Nav />
      <div className="px-44 grid grid-cols-[1fr_auto] overflow-hidden max-md:px-1 max-sm:hidden">
        <MainPage />
        <RightSide />
      </div>
      <div className="md:hidden">
        <MainPage />
      </div>
      <div className="sticky bottom-0 p-2 md:hidden border bg-gray-300 border-gray-400">
        <MoboNav />
      </div>
    </div>
  );
}

export default App;
