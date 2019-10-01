import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: "",
    password: "",
}

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  render() {
    return (
      <div className="center">
        <form
          className= "login-form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}>
          <h2 className="center-text">Sign In</h2>
          <input
            className="form-input"
            id="email"
            placeholder="Email"
            value={this.state.email}
            required/>
          <br/>
          <input
            className="form-input"
            type= "password"
            id="password"
            placeholder="password"
            value={this.state.password}
            required/>
          <br/>
          <input
            className="button"
            type="submit"
            value="Login"/>
        </form>
      </div>
    );
  }

}

export default Login;
