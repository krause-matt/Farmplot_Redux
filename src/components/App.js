import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import RowCreate from "./rows/RowCreate";
import RowDelete from "./rows/RowDelete";
import RowDetails from "./rows/RowDetails";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";
import Header from "./Header";


const App = () => {
  return (
    <div className="ui container">      
      <BrowserRouter>
        <div>
          <Header />     
          <Route path="/rows/new" exact component={RowCreate} />                  
          <Route path="/rows/delete" exact component={RowDelete} />
          <Route path="/rows/edit" exact component={RowEdit} />
          <Route path="/" exact component={RowList} />
          <Route path="/rows/details" exact component={RowDetails} />
        </div>
      </BrowserRouter>
    </div>
    
  );
};

export default App;