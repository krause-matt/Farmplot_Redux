import React from "react";
import { connect } from "react-redux";
import { createRow } from "../../actions/";
import RowForm from "./RowForm";

class RowCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createRow(formValues)
  };

  render() {
    return (
      <div>
        <h3>Create a Row</h3>
        <RowForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

export default connect(null, {createRow})(RowCreate)