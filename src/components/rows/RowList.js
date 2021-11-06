import React from "react";
import { connect } from "react-redux";
import { getRows } from "../../actions/index";

class RowList extends React.Component {

  componentDidMount() {
    this.props.getRows();
  };

  rowList() {
    return this.props.rows.map((row) => {
      return <div>{row.plant}</div>;
    });
  };
  
  render() {
    return (
    <div>{this.rowList()}</div>
    );
  };
  
};

const mapStateToProps = (state) => {
  return {rows: Object.values(state.rows)}
};

export default connect(mapStateToProps, {getRows})(RowList);