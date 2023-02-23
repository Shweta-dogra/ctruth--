import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';
//import Canvas from './components/Canvas';

function App() {

  const [color, setColor] = useState("#ADD8E6");
  const [num, setNum] = useState(10);
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  
  const func =(e)=>{
    setColor(e.hex);
    
  }
  
  const canvas = useRef(null);

  useEffect(() => {
    const can = canvas.current;
    const ctx = can.getContext("2d");
    const cX = can.width / 2;
    const cY = can.height / 2;

    ctx.fillStyle = "#F5F5F5";
    ctx.fillRect(0, 0, can.width, can.height);

    ctx.fillStyle = color;
    ctx.font = "bold 100px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(num.toString().padStart(2, "0"), cX, cY);
  }, [color, num]);
  
  const handleChange=(e)=>{
    const val = e.target.value;
    if (val === "100X100") {
      setWidth(20);
      setHeight(20);
    } else if (val === "200X200") {
      setWidth(30);
      setHeight(30);
    } else if (val === "300X300") {
      setWidth(50);
      setHeight(50);
    } else if (val === "400X400") {
      setWidth(65);
      setHeight(65);
    } else if (val === "500X500") {
      setWidth(80);
      setHeight(80);
    }
  }
  return (
    <div className="App">
      <div className='left'>
        <label>Colour picker:</label>
        <SketchPicker  color={color} onChangeComplete={func} />
        
        <select className='selection' onChange={handleChange}>
          <option value='100X100'>100X100</option>
          <option value='200X200'>200X200</option>
          <option value='300X300'>300X300</option>
          <option value='400X400'>400X400</option>
          <option value='500X500'>500X500</option>
        </select>
      </div>
      <div className='right'>
      
        <canvas id="myCanvas" ref={canvas} contentEditable='true'  style={{width:width+"vw", height:height+"vh", backgroundColor:color}}>
        </canvas>
        <br/>
        <input type={'number'} max='99' min='10' value={num} onChange={(e)=>{setNum(parseInt(e.target.value));}} />
        <br/>
        <div>
          {/* Change Size of Canvas:
          <br/>
        x:<input type={'number'} value={width} onChange={(e)=>{setWidth(e.target.value);}} />
        y:<input type={'number'} value={height} onChange={(e)=>{setHeight(e.target.value)}} /> */}
      </div>
      </div>
      
      
      

    </div>
  );
}

export default App;
