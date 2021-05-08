import React from 'react';
import ReactDOM from 'react-dom';
import Flag from './Library/flag';

let fcode = 'fi' as const;
let sizeY: number = 30;

ReactDOM.render(
  <React.StrictMode>
    <Flag flagCode={fcode} height={sizeY}/>
  </React.StrictMode>,
  document.getElementById('root')
);
