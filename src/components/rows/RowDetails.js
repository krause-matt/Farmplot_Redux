import React from "react";
import { connect } from "react-redux";
import { getRow } from "../../actions/index";
import { Link } from "react-router-dom";


class RowDetails extends React.Component {

  componentDidMount() {
    this.props.getRow(this.props.match.params.id)
  };

  userAuthorize = (row) => {
    if (row.userId === this.props.currentUser && this.props.currentUser) {
      return (
        <React.Fragment>          
          <Link className="circular ui button green" to={`/rows/edit/${row.id}`} style={{border: "1px black solid", marginRight: "1rem"}}>Edit</Link>          
          <Link className="circular ui button red" to={`/rows/delete/${row.id}`} style={{border: "1px black solid"}}>Delete</Link>         
        </React.Fragment>        
      );
    };
  };

  render() {
    if (!this.props.row) {
      return <div>...Loading</div>;
    };

    const {plant, variety, plantDate, harvestDate} = this.props.row;

    return (
      <div className="ui card centered">
        <div className="image">
          <img src={`https://source.unsplash.com/random/?${plant}`} alt={plant}/>
        </div>
        <div className="content">
          <div className="header">{plant}</div>
          <div className="meta">
            <span className="date">{variety}</span>
          </div>
          <div className="description">
            
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar check outline icon"></i>
            {plantDate === undefined ? "Planted date not selected" : `Planted : ${plantDate}`}
          </div>
        </div>
        <div className="extra content">
          <div>
            <i className="calendar check icon"></i>
            {harvestDate === undefined ? "Harvest date not selected" : `Harvested : ${harvestDate}`}
          </div>
        </div>
        <div className="extra content">
          <div className="ui grid">
            <div className="two wide row centered">
              {this.userAuthorize(this.props.row)}
            </div>            
          </div>
        </div>        
      </div> 
    );
  };  
};

const mapStateToProps = (state, ownProps) => {
  return {
    row: state.rows[ownProps.match.params.id],
    currentUser: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(mapStateToProps, {getRow})(RowDetails);