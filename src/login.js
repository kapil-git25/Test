import React from 'react';

class Login extends React.Component {

   constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
   }

   handleLoginClick() {
      this.props.loginClick();
   }

   render() {
      return (<div>
         <h3>Login</h3>
         <div>
            <div><input type="text" required /></div>
            <div><input type="password" required /></div>
            <button onClick={this.handleLoginClick}>Login</button>
         </div>
      </div>);
   }

}

export default Login;