import "./Image.css";

export function Image({ name }) {
  return (
    <>
      <img src="../../images/color.png" className={name}></img>
    </>
  );
}
