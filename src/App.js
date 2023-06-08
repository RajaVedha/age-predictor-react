import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name,setName] = useState('');
  const [predictedAge,setPredictedAge] = useState({});

  const fetchAge = () => {
     Axios.get(`https://api.agify.io/?name=${name}`).then((res) => setPredictedAge(res.data))
  } 

  return (
    <div className="App">
      <h1 className='headingOne'>Age <span className='headingTwo'>Predictor</span></h1>
      <div className='container'>
        <input className="input-field" onChange={(event) => {
            setName(event.target.value)
        }}placeholder='Enter Your Name'/>
        <button className='my-button' onClick={fetchAge}>submit</button>
      </div> <br /> <br />
      <div className='container'>
      {predictedAge.age === null ?  <h1 className='invalidage'> <span className='age'>Invalid</span> Name!</h1>  : <h1 className='validage'>Age : <span className='age'>{predictedAge?.age}</span></h1> }
      </div>
     
    </div>
  );
}

export default App;
