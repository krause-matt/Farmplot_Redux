import React from "react";
import { connect } from "react-redux";
import { getGardens } from "../../actions/index";
import { Link } from "react-router-dom";

class GardenList extends React.Component {

  componentDidMount() {
    this.props.getGardens();
  };

  userAuthorize = (garden) => {
    if (garden.userId === this.props.curUserId && this.props.curUserId) {
      return (
        <div className="extra content">
          <div className="ui bottom attached green button">
            <i className="leaf icon"></i>
            <Link to={`/gardens/${garden.id}/rows/new`} style={{color: "white"}}>Plant Item</Link>
          </div>
          <div className="ui bottom attached button">
            <i className="edit icon"></i>
            <Link to={`/gardens/edit/${garden.id}`}>Edit Garden Name</Link>
          </div>
          <div className="ui bottom attached button">
            <i className="trash alternate icon"></i>
            <Link to={`/gardens/delete/${garden.id}`}>Delete Garden</Link>
          </div>
        </div>        
      );
    };
  };

  gardenList() {
    return this.props.gardens.map((garden) => {
      return (
        <div className="card" key={garden.id}>
          <div className="center aligned header" style={{
            fontSize: "1.4rem",
            fontWeight: "bold",
            margin: "2rem",
            padding: "2rem"
          }}>
            <Link to={`/gardens/${garden.id}/rows`} style={{
              color: "black"
            }}>
              {garden.gardenTitle}
            </Link>
          </div>          
          {this.userAuthorize(garden)}
        </div>            
      );
    });
  };

  createGardenButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="ui button left floated content" style={{
          border: "1px gray solid",
          boxShadow: "0rem .2rem .7rem .2rem rgba(0,0,0,.1)",
          marginTop: "2rem"
        }}>
          <Link to="/gardens/new">Create Garden</Link>
        </div>        
      );
    };
  };

  render() {
    return (
    <div>
      <div className="ui three stackable cards">
        {this.gardenList()}       
      </div>
      {this.createGardenButton()} 
    </div>
    
    );
  };
  
};

const mapStateToProps = (state) => {
  return {
    gardens: Object.values(state.gardens),
    curUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {getGardens})(GardenList);