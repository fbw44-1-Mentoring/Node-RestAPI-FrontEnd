
import React from 'react';
import LoginSignup from './component/Login-Signup';
import Orders from './component/Orders';
import Products from './component/Products';
function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor:"blue", textAlign:"center"}}>RestFull API</h1>
      <div style={{display:"flex"}}>
        <LoginSignup/>
        <Orders/>
        <Products/>
      </div>
    </div>
  );
}


export default App;