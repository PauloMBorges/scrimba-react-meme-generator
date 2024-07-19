import { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} alt="" className="meme--image" />
    </main>
  );
}

export default Meme;
