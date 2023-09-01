import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import Box from './components/Box'

function App() {

  const [boxes, setBoxes] = useState([]);

  const [boxDetails, setBoxDetails] = useState({
    color: "",
    size: "",
  })

  return (
    <div className="App">
      <legend>Form.jsx</legend>
      <fieldset>
        <Form
          boxDetails={boxDetails}
          setBoxDetails={setBoxDetails}
          boxes = {boxes}
          setBoxes={setBoxes}
        />
      </fieldset>
      <legend>Box.jsx</legend>  
      <fieldset>
        {
          boxes.map(box => <Box color={box.color} size={box.size}/>)
        }
      </fieldset>

    </div>
  );
}

export default App;
