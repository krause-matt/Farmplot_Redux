import React from "react";
import { connect } from "react-redux";
import { getRow } from "../../actions/index";
import { editRow } from "../../actions/index";
import RowForm from "./RowForm";
import _ from "lodash";

class RowEdit extends React.Component {

  componentDidMount() {
    this.props.getRow(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editRow(this.props.match.params.id, formValues)
  };

  render() {
    if (!this.props.row) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Garden Row</h3>
        <RowForm initialValues={_.pick(this.props.row, "plant", "variety", "colorBack", "colorText")} onSubmit={this.onSubmit} />
      </div>      
    );
  }  
}

const mapStateToProps = (state, ownProps) => {
  return { 
    row: state.rows[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getRow, editRow })(RowEdit);