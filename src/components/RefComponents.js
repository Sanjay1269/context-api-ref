import React, { useEffect, useRef } from 'react';

function RefComponents() {
    const inputRef = useRef()
    const passwordRef = useRef()
    useEffect(() => {
        console.log('inputRef',inputRef);
        console.log('inputRef', inputRef.current);
        inputRef.current.focus()
    },[])

  return <div>
      <input ref={inputRef} type="text" placeholder='enter the email'/>
      <input ref={passwordRef} type='password' placeholder='enter the password'/>
      <button onClick={() => {
          passwordRef.current.focus()
      }}>Login</button>
  </div>;
}

export default RefComponents;
