import React, { useContext, useEffect } from 'react';
import LoginContext from '../Context-api/LoginContext';

function ComponentE() {
    let logInData = useContext(LoginContext)
    useEffect(() => {
        console.log('loginData',logInData);
    },[])
  return <div>
      Component E-{logInData.loggedInUser}
  </div>;
}

export default ComponentE;




