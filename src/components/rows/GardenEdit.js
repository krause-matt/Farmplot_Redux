import React from "react";
import { connect } from "react-redux";
import { getGarden, editGarden } from "../../actions/index";
import GardenForm from "./GardenForm";
import _ from "lodash";

class GardenEdit extends React.Component {

  componentDidMount() {
    this.props.getGarden(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editGarden(this.props.match.params.id, formValues)
  };

  render() {
    if (!this.props.garden) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit Garden</h3>
        <GardenForm initialValues={_.pick(this.props.garden, "gardenTitle")} onSubmit={this.onSubmit} />
      </div>      
    );
  }  
}

const mapStateToProps = (state, ownProps) => {
  return { 
    garden: state.gardens[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { getGarden, editGarden })(GardenEdit);