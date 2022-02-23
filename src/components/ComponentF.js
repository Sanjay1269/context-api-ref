import React, { useContext } from 'react';
import DataContext from '../Context-api/DataContext';

function ComponentF() {
  let data = useContext(DataContext)
  return <div>
    ComponetF - {data}
    <button onClick={() =>{
      data='999'
      console.log(data);
    }}>
      Update Data - F
    </button>

  </div>;
}

export default ComponentF;
