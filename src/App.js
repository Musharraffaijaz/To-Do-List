import logo from './logo.svg';
import './index.css';
import { useState } from 'react';
import { Footer } from './components/Footer';

function App() {
const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);

const handleChange =(e)=>{
  const newValue = e.target.value;
  setInputText(newValue)
}

const addItem =()=>{
  setItems((prevData)=>{
    return [...prevData, inputText]
  })
  setInputText('')
}



  return (
<>
<div className="container" style={{marginTop: "10em"}}>
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
    <Footer/>
</>
  );
}

export default App;
