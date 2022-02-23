import logo from './logo.svg';
import './App.css';
import { UserProvider } from './Context-api/UserContext';
import ComponentA from './components/ComponentA';
import { useState } from 'react';
import { LoginProvider } from './Context-api/LoginContext';
import { DataProvider } from './Context-api/DataContext';
import ComponentD from './components/ComponentD';
import ComponentF from './components/ComponentF';
import RefComponents from './components/RefComponents';
import RefClassComponents from './components/RefClassComponents';
import ComponentG from './components/ComponentG';

function App() {
  const [user, setUser] = useState('sanjay')
  const [loginData, setloginData] = useState({
    isLogin: true,
    loggedInUser: 'sanjay'
  });

  let myData = '111'
  return (
    <div className="App">
      Context API
      <br/>
      <button onClick={() => {
        setUser('kiran')
      }}>UpdateUserName</button>
      <UserProvider value={user}>
        <ComponentA />
      </UserProvider>

      <LoginProvider value={loginData}>
        <ComponentD />
      </LoginProvider>

      <DataProvider value={myData}>
        <ComponentF/>
      </DataProvider>

      <button onClick={() => {
        myData='222'
        console.log(myData);
      }}>update button</button>
      <br/>
      <hr/>
      <RefComponents/>
      <br/>
      <hr/>
      <RefClassComponents/>




    </div>
  );
}

export default App;
