import logo from './logo.svg';
import './App.css';
import useFetch from './useFetch';

function App() {
  const {data, loading, error} = useFetch("https://v2.jokeapi.dev/joke/Any");

  if(loading) return <h1> LOADING ...</h1>

  if (error) console.log(error);

  return (
    <div className="App">
      <h1>
        {data?.setup} : {data?.delivery}
      </h1>
    </div>
  );
}

export default App;
