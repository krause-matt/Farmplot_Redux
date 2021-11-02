import React from "react";
import { Field, reduxForm } from "redux-form"

class RowCreate extends React.Component {
  renderInput({input, label}) {
    console.log()
    return (
      <div className="field">
        <label>{label} </label>
        <input {...input} />
      </div>
      
    );
  };


  render() {
    return (
      <form className="ui form">
        <Field name="plant" component={this.renderInput} label="Enter Plant" />
        <Field name="variety" component={this.renderInput} label="Enter Variety" />
      </form>
    );
  };
  }
  

export default reduxForm({
  form: "rowCreate"
})(RowCreate);