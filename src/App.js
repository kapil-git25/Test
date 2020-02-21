import React from 'react';
import Login from './login';
import Dashboard from './dashboard';


function App() {
   //let history = useHistory();

   let handleLogin = () => {
      //history.push("/dashboard")
   }

   return (
      <div>
         <Login loginClick={handleLogin} />
         <Dashboard />
      </div>
   );
}

export default App;
