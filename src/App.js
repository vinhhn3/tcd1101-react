import "./App.css";
import GithubState from "./context/github/githubState";
import Body from "./layout/Body";
import Navbar from "./layout/Navbar";

function App() {
  return (
    <GithubState>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </GithubState>
  );
}

export default App;
