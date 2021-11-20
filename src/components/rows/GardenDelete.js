import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { getGarden, deleteGarden, deleteRow } from "../../actions/index";
import { Link } from "react-router-dom";


class GardenDelete extends React.Component {

  componentDidMount() {
    this.props.getGarden(this.props.match.params.id);
  };

  deleteAll = () => {
    //this.props.deleteGarden(this.props.match.params.id);
    //console.log(this.props.rows)
    // const rowDel = this.props.rows.filter(row => row.gardenNum === this.props.match.params.id)
    // //console.log(rowDel)
    // let ids = [];
    // rowDel.forEach(function(row) {
    //   ids.push(row.id)
    // })
    // for (let i = ids.length, j = 0, k = Promise.resolve(); i > 0; i--, j++) {
    //   k = k.then(this.props.deleteRow(ids[j])).catch(null)
    // }

    // //CODE BELOW WORKS SOMETIMES **FOUND ROOT CAUSE - JSON-SERVER ONLY ALLOWS 3 DELETE REQ's PER SEC
    // //this.props.deleteGarden(this.props.match.params.id)
    // (this.props.deleteRow(4))
    // .then(this.props.deleteRow(5))
    // .then(this.props.deleteRow(6))
    // .catch(console.log("error"))

    // this.props.deleteRow(4)
    // // CODE BELOW WORKING (ONLY WITH 3 OR FEWER ROWS)
    Promise.all([this.props.deleteRow(4), this.props.deleteRow(5), this.props.deleteRow(6), this.props.deleteRow(7)])

  }

  // actions() {
  //   return (
  //     <React.Fragment>
  //       <button onClick={() => this.props.deleteGarden(this.props.match.params.id)} className="ui button negative">Delete</button>
  //       <Link className="ui button" to="/">Cancel</Link>
  //     </React.Fragment>
  //   );
  // };

  actions() {
    return (
      <React.Fragment>
        <button onClick={() => this.deleteAll()} className="ui button negative">Delete</button>
        <Link className="ui button" to="/">Cancel</Link>
      </React.Fragment>
    );
  };

  deleteMessage() {
    if (!this.props.garden) {
      return "Are you sure you would like to delete this Garden?";
    } else {
      return `Are you sure you would like to delete ${this.props.garden.gardenTitle} and all its contents?`;
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
    garden: state.gardens[ownProps.match.params.id],
    rows: Object.values(state.rows)
  }    
}

export default connect(mapStateToProps, {getGarden, deleteGarden, deleteRow})(GardenDelete);