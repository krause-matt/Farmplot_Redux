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
        <React.Fragment>                    
          <Link className="ui button right floated" to={`/gardens/edit/${garden.id}`} style={{border: "1px black solid", marginRight: "1rem"}}>Edit</Link>          
          <Link className="ui button right floated" to={`/gardens/delete/${garden.id}`} style={{border: "1px black solid"}}>Delete</Link>
          <Link className="ui button right floated" to={`/gardens/${garden.id}/rows/new`} style={{border: "1px black solid", marginRight: "3rem"}}>Plant Item</Link>        
        </React.Fragment>        
      );
    };
  };

  gardenList() {    
    return this.props.gardens.map((garden) => {
      return (
        <div className="item" key={garden.id}>          
          <div className="content" style={{
            border: "2px black solid",
            marginBottom: "2rem",
            borderRadius: "1rem",
            padding: "1rem",
            boxShadow: "0rem .2rem .7rem .2rem rgba(0,0,0,.1)"
          }}>
              <Link className="header" to={`/gardens/${garden.id}/rows`} style={{
                fontSize: "1.3rem",
                fontWeight: "bold",
                marginLeft: "1rem"
              }}>{garden.gardenTitle}</Link>
              {this.userAuthorize(garden)}
              <div className="description" style={{marginLeft: "1rem"}}>
                Garden                 
              </div>                               
          </div> 
        </div>                      
      );
    });
  };

  createGardenButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="ui button right floated content" style={{
          border: "1px black solid",
          boxShadow: "0rem .2rem .7rem .2rem rgba(0,0,0,.1)"
        }}>
          <Link to="/gardens/new">Create Garden</Link>
        </div>        
      );
    };
  };
  
  render() {
    return (
    <div>
      {this.gardenList()}
      {this.createGardenButton()}    
    </div>
    );
  };
  
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    gardens: Object.values(state.gardens),
    curUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {getGardens})(GardenList);