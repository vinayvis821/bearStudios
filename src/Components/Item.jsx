import "./Item.css";

export function Item({ type, imagesrc }) {
  return (
    <div className="item">
      <h2>{type}</h2>
      <div className="con">
        <img src={imagesrc}></img>
      </div>
    </div>
  );
}
