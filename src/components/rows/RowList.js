import React from "react";
import { connect } from "react-redux";
import { getRows } from "../../actions/index";
import { Link } from "react-router-dom";

class RowList extends React.Component {

  componentDidMount() {
    this.props.getRows();
  };

  userAuthorize = (row) => {
    if (row.userId === this.props.curUserId && this.props.curUserId) {
      return (
        <div>          
          <Link className="ui button" to={`/rows/edit/${row.id}`}>Edit</Link>          
          <Link className="ui button" to="rows/delete">Delete</Link>         
        </div>        
      );
    };
  };

  rgbaConvert = (row) => {
    const {r, g, b, a} = row.color;
    return `rgba(${r}, ${g}, ${b}, ${a})`
  }

  rowList() {    
    return this.props.rows.map((row) => {
      return (
        <div style={{backgroundColor: this.rgbaConvert(row)}}>      
          {row.plant}
          {this.userAuthorize(row)}        
        </div>               
      );
    });
  };

  createRowButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="ui button right floated content" style={{textAlign: "right"}}>
          <Link to="/rows/new">Create Row</Link>
        </div>
      );
    };
  };
  
  render() {
    return (
    <div>
      {this.rowList()}
      {this.createRowButton()}    
    </div>
    );
  };
  
};

const mapStateToProps = (state) => {
  return {
    rows: Object.values(state.rows),
    curUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, {getRows})(RowList);