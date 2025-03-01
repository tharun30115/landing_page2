import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "what you Love" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give in to", text2: "your Passions" },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
    </div>
  );
};

export default App;
