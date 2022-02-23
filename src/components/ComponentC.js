import React, { useEffect, useContext } from 'react';
import UserContext from '../Context-api/UserContext';


function ComponentC() {
    const context = useContext(UserContext)
    useEffect(() => {
        console.log('context', context);
    }, [])
    return <div>
        <p>Component Context Api data-{context}</p>
    </div>;
}

export default ComponentC;


