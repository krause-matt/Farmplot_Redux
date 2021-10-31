import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "960533575397-f4mlvqqe4o83k0g5ppdfugblcejhti1i.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.authChange);
      });
    });
  };

  authChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  toSignIn = () => {
    this.auth.signIn();
  };

  toSignOut = () => {
    this.auth.signOut();
  };

  renderButton = () => {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn === true) {
      return (
        <button className="ui red google button" onClick={this.toSignOut}>
          <i className="google icon" />  
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui blue google button" onClick={this.toSignIn}>
          <i className="google icon" />  
          Sign In
        </button>
      );
    };
  };


  render() {
    return (
      <div>{this.renderButton()}</div>
    );
  };
};

export default GoogleAuth;