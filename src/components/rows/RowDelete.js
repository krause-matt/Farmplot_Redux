import React from "react";
import Modal from "../Modal";

const RowDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button className="ui button">Cancel</button>
    </div>
  );

  return (
    <div>
      RowDelete
      <Modal 
        title="Delete Garden Row"
        content="Are you sure you'd like to delete this garden row?"
        actions={actions}
      /> 
    </div>
  );
};

export default RowDelete;