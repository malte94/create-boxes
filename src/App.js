import React from 'react';
import './App.css';

export default  function App() {

  const [height, setHeight] = React.useState("");
  const [width, setWidth] = React.useState("");
  const [color, setColor] = React.useState("");
  const [boxes, setBoxes] = React.useState("");

  const generateBox = (e) => {
    e.preventDefault();
    setBoxes([...boxes, <Box width={width + "px"} height={height + "px"} color={color} />]); // ... -> Pushes to Array
  }

  return (
    <div className="App">
        <form>
          Height (px):
          <input id="height" name="height" type="number" onChange={e => setHeight(e.target.value)} value={height} />
          Width (px):
          <input id="width" name="width" type="number" onChange={e => setWidth(e.target.value)} value={width} />
          Color:
          <input id="color" name="color" onChange={e => setColor(e.target.value)} value={color} />
          <button onClick={generateBox}>Add Box!</button>
        </form>
        {boxes}
    </div>
  );
}

export function Box(props) {

  const removeBox = (e) => {
    e.currentTarget.parentNode.remove();
  }

  return(
    <div className="box" style={ {display: 'block', margin: '20px auto', width: props.width, height: props.height, backgroundColor: props.color} }>
      box
      <button onClick={removeBox}>x</button>
    </div>
  )
}
