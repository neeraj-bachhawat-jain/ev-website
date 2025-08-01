import "./App.css";
import Background from "./Conponents/Background/Background";
import { useEffect, useState } from "react";
import Navbar from "./Conponents/Navbar/Navbar";
import Heroes from "./Conponents/Heroes/Heroes";

function App() {
  const heroData = [
    { text1: "Drive into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{
        return count === 2 ? 0 : count+1 
      })
    }, 3000)
  },[])

  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus}></Background>
      <Navbar></Navbar>
      <Heroes
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      ></Heroes>
    </div>
  );
}

export default App;
