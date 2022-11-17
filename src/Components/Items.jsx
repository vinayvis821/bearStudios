import "../App.css";
import { Item } from "./Item";

export function Items() {
  return (
    <div className="container">
      <Item type="Tops" imagesrc="../images/Vest.jpg" />
      <Item type="Bottoms" imagesrc="../images/short.jpeg" />
    </div>
  );
}
