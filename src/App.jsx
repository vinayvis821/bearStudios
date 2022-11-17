import { Nav } from "./Components/Nav";
import { Images } from "./Images";
import { About } from "./Components/About";
import { Cart } from "./Components/Cart";
import { Bottoms } from "./Components/Bottoms";
import { Tops } from "./Components/Tops";
import { Items } from "./Components/Items";

import "./App.css";

function App() {
  const whatIsSelected = "null";

  return (
    <div className="App">
      <Nav />
      <Items />
      <Images />
    </div>
  );
}

export default App;
