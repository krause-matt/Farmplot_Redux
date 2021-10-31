import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RowCreate from "./rows/RowCreate";
import RowDelete from "./rows/RowDelete";
import RowDetails from "./rows/RowDetails";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";


const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Route path="/rows/new" exact component={RowCreate} />
        <Route path="/rows/:id" exact component={RowDetails} />        
        <Route path="/rows/delete/:id" exact component={RowDelete} />
        <Route path="/rows/edit/:id" exact component={RowEdit} />
        <Route path="/" exact component={RowList} />
      </BrowserRouter>
    </div>
    
  );
};

export default App;