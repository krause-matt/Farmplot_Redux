import React from "react";
import { Field, reduxForm } from "redux-form";

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

  renderInput = ({input, label, meta}) => {
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`

    return (
      <div className={fieldClass}>
        <label>{label} </label>
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
        <Field name="plant" component={this.renderInput} label="Enter Plant" />
        <Field name="variety" component={this.renderInput} label="Enter Variety" />
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