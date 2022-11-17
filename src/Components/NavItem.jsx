import "./Nav.css";
import { useState } from "react";

export function NavItem({ source, page }) {
  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected(!selected);
  }

  return (
    <a
      href={source}
      onClick={handleClick}
      className={selected ? "selected" : "unselected"}
    >
      {page}
    </a>
  );
}
