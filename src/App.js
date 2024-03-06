import "./App.css";
import bmiImage from "../src/Assets/login-b2c.svg"
import { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const[bmi, setBmi]= useState("");
  const[bmiStatus, setBmiStatus] = useState("");
  const[errorMessage, setErrorMessage] = useState("");


const calculateBmi = () => {
  const isValidHeight = /^\d+$/.test(height);
  const isValidWeight = /^\d+$/.test(weight);


  if (isValidHeight && isValidWeight) {
    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));
    if (bmiValue < 18.5) {
      setBmiStatus("UnderWeight");
    }  else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBmiStatus("Normal Weight");
    }  else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBmiStatus("overWeight");
    } else {
      setBmiStatus("obese");
    }
    setErrorMessage("")
 } else {
    setBmi(null);
    setBmiStatus("");
    setErrorMessage('Please enter valid numeric values for height and weight.')
  }
};

const clearAll = () => {
  setHeight("");
  setWeight("");
  setBmi(null);
  setBmiStatus("");
  
}


  return (
    
    <>
      <div className=" flex h-full w-[40rem] p-4 gap-2 bg-slate-200 rounded-md ">
        <div className="w-1/2  flex ">
        <img src={bmiImage} alt="Description of the image" />
        </div>
        <div className="data  p-4 font-normal ">
          <h1 className="mb-5 py-2 font-bold text-sky-500 ">BMI CALCULATOR</h1>

          {errorMessage && <p className="error text-red-600 font-normal mb-2 ">{errorMessage}</p>}
          <div className="input-container mb-4">
            <label className="block m-1 text-slate-500 ">Height (cm):</label>
            <input className="w-full p-2 rounded mb-2 border-2 border-slate-400 font-medium" value={height} type="text" name="" id="" onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label className="block m-1 text-slate-500 ">Weight (kg):</label>
            <input className="w-full p-2 rounded mb-2 border-2 border-slate-400 font-medium" value={weight} type="text" name="" id="" onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className=" flex ">
          <button className="bg-teal-500 text-white py-2 px-2 font-normal mr-4 rounded-md my-2 hover:bg-teal-600" onClick={calculateBmi}>Calculate BMI</button>
          <button className="bg-red-600 text-white py-2 px-2 font-normal rounded-md my-2 hover:bg-red-700" onClick={clearAll}>Clear</button>
          </div>
          {bmi !== null && (
            <div className="my-4 p-4 border-2 rounded border-blue-400">
            <p className="text-violet-600 font-normal">Your BMI is: <span className="text-orange-500 font-medium">{bmi}</span></p>
            <p className="font-normal text-violet-600">Status: <span className="text-orange-500 font-medium">{bmiStatus}</span></p>
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
