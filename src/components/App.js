import { useState } from "react";
import Header from "./Header.js";
import PricingContainer from "./PricingContainer.js";

export default function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <Header toggle={toggle} setToggle={setToggle} />
      <PricingContainer toggle={toggle} />
    </div>
  );
}
