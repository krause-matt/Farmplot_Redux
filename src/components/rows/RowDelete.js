import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { getRow, deleteRow } from "../../actions/index";
import { Link } from "react-router-dom";


class RowDelete extends React.Component {

  componentDidMount() {
    this.props.getRow(this.props.match.params.id);
  };

  actions() {
    const gardenNum = (window.location.pathname).split(`/`)[2];
    const gardenPath = `/gardens/${gardenNum}/rows`
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteRow(this.props.match.params.id, gardenNum)} className="ui button negative">Delete</button>
        <Link className="ui button" to={gardenPath}>Cancel</Link>
      </React.Fragment>
    );
  };

  deleteMessage() {
    if (!this.props.row) {
      return "Are you sure you would like to delete this row?";
    } else {
      return `Are you sure you would like to delete the ${this.props.row.plant} row?`;
    };
  };
  
  render() {
    return (
        <Modal 
          title="Delete Garden Row"
          content={this.deleteMessage()}
          actions={this.actions()}
          dismiss={() => history.push("/")}
        />
    );
  };  
};

const mapStateToProps = (state, ownProps) => {
  return {
    row: state.rows[ownProps.match.params.id]
  }    
}

export default connect(mapStateToProps, {getRow, deleteRow})(RowDelete);