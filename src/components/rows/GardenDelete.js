import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { getGarden, deleteGarden } from "../../actions/index";
import { Link } from "react-router-dom";


class GardenDelete extends React.Component {

  componentDidMount() {
    this.props.getGarden(this.props.match.params.id);
  };

  actions() {
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteGarden(this.props.match.params.id)} className="ui button negative">Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
      </React.Fragment>
    );
  };

  deleteMessage() {
    if (!this.props.row) {
      return "Are you sure you would like to delete this Garden?";
    } else {
      return `Are you sure you would like to delete the ${this.props.garden} row?`;
    };
  };
  
  render() {
    return (
        <Modal 
          title="Delete Garden"
          content={this.deleteMessage()}
          actions={this.actions()}
          dismiss={() => history.push("/")}
        />
    );
  };  
};

const mapStateToProps = (state, ownProps) => {
  return {
    garden: state.gardens[ownProps.match.params.id]
  }    
}

export default connect(mapStateToProps, {getGarden, deleteGarden})(GardenDelete);