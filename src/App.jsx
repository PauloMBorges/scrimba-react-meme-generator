import Header from "./components/Header";
import Meme from "./components/Meme";

function App() {
  return (
    <>
      <Header />
      <div className="meme-container">
        <Meme />
      </div>
    </>
  );
}

export default App;
