import React from "react";
import { connect } from "react-redux";
import { getRow } from "../../actions/index";

class RowEdit extends React.Component {

  componentDidMount() {
    this.props.getRow(this.props.match.params.id);
  }

  render() {
    if (!this.props.row) {
      return <div>Loading...</div>;
    }
    return (
      <div>{this.props.row.plant}</div>
    );
  }  
}

const mapStateToProps = (state, ownProps) => {
  return { 
    row: state.rows[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getRow })(RowEdit);