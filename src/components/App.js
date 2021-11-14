import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import RowCreate from "./rows/RowCreate";
import RowDelete from "./rows/RowDelete";
import RowDetails from "./rows/RowDetails";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";
import Header from "./Header";
import history from "../history";


const App = () => {
  return (
    <div>
      <div className="ui container">      
        <Router history={history}>
          <div>
            <Header />
              <Switch>     
                <Route path="/rows/new" exact component={RowCreate} />                  
                <Route path="/rows/delete/:id" exact component={RowDelete} />
                <Route path="/rows/edit/:id" exact component={RowEdit} />
                <Route path="/" exact component={RowList} />
                <Route path="/rows/:id" exact component={RowDetails} />
              </Switch>
          </div>
        </Router>
      </div> 
    </div>
       
  );
};

export default App;