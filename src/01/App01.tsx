import "./style.css";
import Logo from "./logo.webp";

function App01() {
  return (
    <div className="text">
      <div>
        <img src={Logo} alt="Logo" width={500} />
      </div>
      Mon premier composant React
    </div>
  );
}

export default App01;
