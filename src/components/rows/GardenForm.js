import React from "react";
import { Field, reduxForm } from "redux-form";

class GardenForm extends React.Component {

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

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues)
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="gardenTitle" component={this.renderTextInput} label="Enter Garden Name" />
        <button className="ui button green">Submit</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.gardenTitle) {
    errors.plant = "Please enter a name for your garden";
  };

  return errors;
};  

export default reduxForm({
  form: "gardenForm",
  validate: validate
})(GardenForm);