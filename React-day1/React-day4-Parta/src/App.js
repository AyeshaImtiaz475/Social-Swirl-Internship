import logo from './logo.svg';
import './App.css';
import Axios from "axios";
import {useEffect, useState} from "react";

//1. method 
// fetch("https://catfact.ninja/fact")
// .then((res) => res.json())
// .then((data) => {
//   console.log(data);
// })

function App() {
  //3. method is to create the use state 
  const [catfact, setCatFact] = useState("");
  //using the useEffect becuse otherwise the fetch data infinity 
  // const fetchCatfact = () => {
  //     Axios.get("https://catfact.ninja/fact").then((res) => {
  //       setCatFact(res.data.fact);
  //     });
  //   };
  //   useEffect(() => {
  //     fetchCatfact();
  //   },[]);
   

  //2. method  is to used axios 
// Axios.get("https://catfact.ninja/fact").then((res) => {
//   console.log(res.data);
// });
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

   const fetchData = () => {
    Axios.get("https://api.agify.io/?name=ayesha").then((res) => {
      setPredictedAge(res.data);
    });
   };

   const [excuse, setExcuse] = useState("");
  const fetchExcuse = () => {
    Axios.get("https://excuser-three.vercel.app/v1/excuse").then((res) => {
      console.log(res.data);
      setExcuse(res.data[0].excuse);
      console.log(res.data[0].excuse);
     });
    }
 
  return (
    <div className="App"><br/>
      {/* <button onClick={fetchCatfact}>Generate  Cat Fact</button>
      <p>{catfact}</p> */}
       <br /><br />
       <input placeholder='Ex. Pedro....'  onChange={(event) => {
        setName(event.target.value);
       }}/>
       <button onClick={fetchData}>Predict Age</button>
       <h1>Name:{predictedAge?.name} </h1>
       <h1>Predicted Age:{predictedAge?.age} </h1>
       <h1>Count:{predictedAge?.count} </h1>
       <br />
       <br />
       <button onClick={fetchExcuse}>Generate Random Excuse</button>
       <p>{excuse}</p>
    </div>
  );
}

export default App;
