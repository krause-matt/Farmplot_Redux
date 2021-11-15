import React from "react";
import { connect } from "react-redux";
import { createGarden } from "../../actions";
import GardenForm from "./GardenForm";

class GardenCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createGarden(formValues)
  };

  render() {
    return (
      <div>
        <h3>Create a Garden</h3>
        <GardenForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

export default connect(null, {createGarden})(GardenCreate)