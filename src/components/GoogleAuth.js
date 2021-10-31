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
  }

  authChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderButton = () => {
    if (this.state.isSignedIn === null) {
      return <div>Not sure</div>;
    } else if (this.state.isSignedIn === true) {
      return <div>Signed In</div>;
    } else {
      return <div>Not Signed In</div>;
    }
  }


  render() {
    return (
      <div>{this.renderButton()}</div>
    );
  }
}

export default GoogleAuth;