import "./Items.css";

export function Tops() {
  function handleHover() {
    console.log("here");
  }

  return (
    <div className="clothing">
      <h1 className="title">Tops</h1>
      <div className="top-container">
        <div className="c">
          <div className="hide">
            <h2>Rain Jacket</h2>
            <p>$130</p>
            <button>Add</button>
          </div>
          <img onMouseEnter={handleHover} src="../../images/jacket.jpeg"></img>
        </div>
        <div className="c">
          <div className="hide">
            <h2>Vest</h2>
            <p>$105</p>
            <button>Add</button>
          </div>
          <img src="../../images/Vest.jpg"></img>
        </div>
      </div>
    </div>
  );
}
