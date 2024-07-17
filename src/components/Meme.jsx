function Meme() {
  return (
    <main>
      <form className="form">
        <div>
          <label>
            Top text
            <input
              className="form--input"
              type="text"
              placeholder="Shut up"
            />
          </label>
        </div>
        <div>
          <label>
            Bottom text
            <input
              className="form--input"
              type="text"
              placeholder="and take my money"
            />
          </label>
        </div>
        <button className="form--button">Get a new meme image 📸</button>
      </form>
    </main>
  );
}

export default Meme;
