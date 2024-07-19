import { useState } from "react";

function Meme() {
  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} alt="" className="meme--image" />
    </main>
  );
}

export default Meme;
