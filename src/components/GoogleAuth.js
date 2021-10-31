import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: "960533575397-f4mlvqqe4o83k0g5ppdfugblcejhti1i.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.authChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.authChange);
      });
    });
  };

  authChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    };
  };

  toSignIn = () => {
    this.auth.signIn();
  };

  toSignOut = () => {
    this.auth.signOut();
  };

  renderButton = () => {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
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

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn};
};

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);