import { NavBar, CardWrapper } from "./components";
import "./App.css";

function App() {
  return (
    <main>
      <NavBar />
      <div className="title">
        <h1>Rick and Morty Universe</h1>
      </div>
      <CardWrapper />
    </main>
  );
}

export default App;
