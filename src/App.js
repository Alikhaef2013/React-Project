import Counter from "./components/Counter";
import MyGitHub from "./components/MyGitHub";

function App() {
  return (
    <div className="App">
      <h1>
        Hello React!
      </h1>
      <h2>
        Ali Khaef - f15j638
      </h2>

      <hr />
      <Counter incCount={8}  /><hr />
	  <Counter incCount={1}/><hr />
      <MyGitHub /><hr />

    </div>
  );
}

export default App;