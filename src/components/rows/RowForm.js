import React from "react";
import { Field, reduxForm } from "redux-form";
import { SwatchesPicker } from "react-color";
import "react-widgets/styles.css";
import { DatePicker } from "react-widgets";

class RowForm extends React.Component {

  errorCheck = ({error, touched}) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    };
  };

  renderTextInput = ({input, label, meta}) => {
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={fieldClass}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.errorCheck(meta)}
      </div>      
    );
  };

  colorPicker = ({input, label}) => {
    const colorClass = (typeof(this.props.initialValues) != "undefined") ? (input.name === "colorBack") ? this.props.initialValues.colorBack : this.props.initialValues.colorText : (input.name === "colorBack") ? "#fff" : "#000";
    return (
      <div className="field">
        <label>{label}</label>
        <SwatchesPicker color={colorClass} onChange={(color) => {this.props.change(input.name, color.rgb)}} />
      </div>
    );
  };

  datePicker = ({input, label, meta}) => {
    const dateClass = (typeof(this.props.initialValues) !== "undefined") ? (this.props.initialValues.plantDate && this.props.initialValues.plantDate !== "Invalid Date" && input.name === "plantDate") ? (new Date(this.props.initialValues.plantDate)) : (this.props.initialValues.harvestDate && this.props.initialValues.harvestDate !== "Invalid Date" && input.name === "harvestDate") ? (new Date(this.props.initialValues.harvestDate)) : null : null;
    return (
      <div className="field">
        <label>{label}</label>
        <DatePicker defaultValue={dateClass} onChange={(value) => {this.props.change(input.name, value.toDateString())}} />
      </div>
    )
  }

  onSubmit = (formValues) => {
    const gardenNum = (window.location.pathname).split(`/`)[2];
    console.log(`gardenNum = ${gardenNum}`)

    formValues.gardenNum = gardenNum;

    if (typeof(formValues.colorBack) == "undefined") {
      formValues.colorBack = {"r": 255, "g": 255, "b": 255, "a": 1};
    };
    if (typeof(formValues.colorText) == "undefined") {
      formValues.colorText = {"r": 0, "g": 0, "b": 0, "a": 1};
    };
    
    const {plantDate, harvestDate} = formValues;
    const start = new Date(plantDate);
    const end = new Date(harvestDate);
    if (plantDate && harvestDate && (start > end)) {
      return (
        alert("Planting date must be earlier than harvest date")
      );
    };
    this.props.onSubmit(formValues)
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="plant" component={this.renderTextInput} label="Enter Plant" />
        <Field name="variety" component={this.renderTextInput} label="Enter Variety" />
        <Field name="plantDate" component={this.datePicker} label="Date Planted" />
        <Field name="harvestDate" component={this.datePicker} label="Date Harvested" />
        <div className="ui grid centered" style={{padding: "2rem 0"}}>
          <Field name="colorBack" component={this.colorPicker} label="Choose Row Color" />
          <Field name="colorText" component={this.colorPicker} label="Choose Text Color" />
        </div>        
        <button className="ui button green">Submit</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.plant) {
    errors.plant = "Please enter a plant";
  };

  if (!formValues.variety) {
    errors.variety = "Please enter the variety";
  };

  return errors;
};  

export default reduxForm({
  form: "rowForm",
  validate: validate
})(RowForm);