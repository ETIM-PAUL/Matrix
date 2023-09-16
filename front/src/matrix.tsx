// src/Matrix.js
import React from 'react';

interface _Matrix {
  data: [];
}


const Matrix = ({ data }: _Matrix) => {
  return (
    <div className="grid-container">
      {data.map((row: [], rowIndex: number) => (
        row.map((cellValue: number, colIndex: number) => (
          <div
            key={`${rowIndex}-${colIndex}`}
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
