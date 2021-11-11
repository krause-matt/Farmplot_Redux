import React from "react";
import { Router, Route, Link } from "react-router-dom";
import RowCreate from "./rows/RowCreate";
import RowDelete from "./rows/RowDelete";
import RowDetails from "./rows/RowDetails";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";
import Header from "./Header";
import history from "../history";


const App = () => {
  return (
    <div className="ui container">      
      <Router history={history}>
        <div>
          <Header />     
          <Route path="/rows/new" exact component={RowCreate} />                  
          <Route path="/rows/delete/:id" exact component={RowDelete} />
          <Route path="/rows/edit/:id" exact component={RowEdit} />
          <Route path="/" exact component={RowList} />
          <Route path="/rows/details" exact component={RowDetails} />
        </div>
      </Router>
    </div>
    
  );
};

export default App;