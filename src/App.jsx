import { useState } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    { text1: "Drive into", text2: "what you Love" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give in to", text2: "your Passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar/>
      <Hero
       setPlayStatus={setPlayStatus}
       heroData = {heroData[heroCount]}
       heroCount = {heroCount}
       setHeroCount = { setHeroCount}
       playStatus= {playStatus}
      />
    </div>
  );
};

export default App;
