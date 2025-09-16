import React from 'react';
import './Decoded.css';
import CodePoint from './CodePoint';

const Decoded = ({ text })=> {
  const codePoints = [];
  for (let x of text) {
    codePoints.push(x);
  }

  return (
    <div className="Decoded">
      {codePoints.map((cp, idx)=>(
          <CodePoint
            key={idx}
            codePoint={cp}
          />
        )
      )}
    </div>
  );
};

export default Decoded;
