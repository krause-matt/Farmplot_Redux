import React from "react";
import { connect } from "react-redux";
import { getRow } from "../../actions/index";


class RowDetails extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getRow(this.props.match.params.id)
  };

  render() {
    if (!this.props.row) {
      return <div>...Loading</div>;
    };

    const {plant, variety} = this.props.row;

    return (
      <React.Fragment>
        <h1>{plant}</h1>
        <h3>{variety}</h3>
      </React.Fragment>      
    );
  };  
};

const mapStateToProps = (state, ownProps) => {
  return {
    row: state.rows[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {getRow})(RowDetails);