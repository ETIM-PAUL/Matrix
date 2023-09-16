// src/Matrix.js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { GlobalContext } from './context/globalContext';
import { toast } from 'react-toastify';

interface _Matrix {
  data: [];
  x: any;
  y: any;
}


const Matrix = ({ data, x, y }: _Matrix) => {

  const { state, dispatch } = useContext(GlobalContext)
  const [prevX, setPrevX] = useState(0)
  const [prevY, setPrevY] = useState(0)

  useEffect(() => {

    //Logic to handle setting and resetting of colors
    setPrevX(x)
    setPrevY(y)
    const prevElement = document.getElementById(prevX + "" + prevY);
    if (prevElement) {
      prevElement.style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    }

    if (state?.color != undefined) {
      const element = document.getElementById(x + "" + y);
      if (element) {
        element.style.backgroundColor = state?.color
      }
    }
  }, [state?.color])

  return (
    <div className="grid-container">
      {data.map((row: [], rowIndex: number) => (
        row.map((cellValue: number, cellIndex: number) => (
          <div
            id={rowIndex + "" + cellIndex}
            onClick={(e: any) => {
              e.target.style.backgroundColor = "red";
              console.log(rowIndex, cellIndex)
            }}
            key={`${rowIndex}-${cellIndex}`}
            style={{ padding: "30px" }}
            className="grid-item bg-[#000000] text-xs text-center"
          >

          </div>
        ))
      ))}
    </div>
  );
};

export default Matrix;
