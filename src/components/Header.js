export default function Header({ toggle, setToggle }) {
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div className="header">
      <h2>Our Pricing</h2>
      <div className="toggle">
        <p>Annually</p>
        <label class="toggle-box" onClick={() => handleToggle()}>
          <div
            class="circle"
            style={toggle ? { marginLeft: "4px" } : { marginLeft: "28px" }}
          ></div>
        </label>
        <p>Monthly</p>
      </div>
    </div>
  );
}
