import React from "react";
import { Field, reduxForm, change } from "redux-form";
import { SwatchesPicker } from "react-color";


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
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`
    return (
      <div className={fieldClass}>
        <label>{label}</label>
        <input {...input} autoComplete="off"/>
        {this.errorCheck(meta)}
      </div>      
    );
  };

  colorPicker = ({input, label, meta}) => {
    const colorClass = (typeof(this.props.initialValues) != "undefined") ? this.props.initialValues.color : "#fff"
    return (
      <div className="field">
        <label>{label}</label>
        <SwatchesPicker color={colorClass} onChange={(color) => { this.props.change("color", color.rgb) }}/>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="plant" component={this.renderTextInput} label="Enter Plant" />
        <Field name="variety" component={this.renderTextInput} label="Enter Variety" />
        <Field name="color" component={this.colorPicker} label="Choose Row Color" />
        <button className="ui button teal">Submit</button>
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