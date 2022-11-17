import "./Items.css";

export function Bottoms() {
  function handleHover() {
    console.log("here");
  }

  return (
    <div className="clothing">
      <h1 className="title">Bottoms</h1>
      <div className="bottom-container cloth-container">
        <div className="c">
          <div className="hide">
            <h2>Cargo Shorts</h2>
            <p>$55</p>
            <button>Add</button>
          </div>
          <img onMouseEnter={handleHover} src="../../images/short.jpeg"></img>
        </div>
        <div className="c">
          <div className="hide">
            <h2>Cargo Pants</h2>
            <p>$65</p>
            <button>Add</button>
          </div>
          <img src="../../images/pants.jpeg"></img>
        </div>
        <div className="c">
          <div className="hide">
            <h2>Skirt</h2>
            <p>$40</p>
            <button>Add</button>
          </div>
          <img src="../../images/Skirt.jpg"></img>
        </div>
      </div>
    </div>
  );
}
