
import Card from "./Card";
import Timer from "./Timer";


function App() {
  return (
    <div className="App">
      {/* <Timer/> */}

      <Card Front = {Timer} Back = {()=><p>BACKSIDE</p>} />
      <Card Front = {Timer} Back = {()=><p>BACKSIDE</p>} autoRotate/>
    </div>
  );
}

export default App;
