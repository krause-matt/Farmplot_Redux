import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import GardenCreate from "./rows/GardenCreate";
import GardenList from "./rows/GardenList";
import GardenEdit from "./rows/GardenEdit";
import GardenDelete from "./rows/GardenDelete";
import RowCreate from "./rows/RowCreate";
import RowDelete from "./rows/RowDelete";
import RowDetails from "./rows/RowDetails";
import RowEdit from "./rows/RowEdit";
import RowList from "./rows/RowList";
import Header from "./Header";
import history from "../history";
// import "./styles.css";


const App = () => {
  return (
    <div>
      <div className="ui container">      
        <Router history={history}>
          <div>
            <Header />
              <Switch>     
                <Route path="/" exact component={GardenList} />
                <Route path="/gardens/new" exact component={GardenCreate} /> 
                <Route path="/gardens/:id/rows" exact component={RowList} />                                 
                <Route path="/rows/new" exact component={RowCreate} />                  
                <Route path="/gardens/:id/rows/new" exact component={RowCreate} />                  
                <Route path="/gardens/delete/:id" exact component={GardenDelete} />
                <Route path="/gardens/:id/rows/delete/:id" exact component={RowDelete} />
                <Route path="/gardens/edit/:id" exact component={GardenEdit} />
                <Route path="/gardens/:id/rows/edit/:id" exact component={RowEdit} />                
                <Route path="/gardens/:id/rows/:id" exact component={RowDetails} />
              </Switch>
          </div>
        </Router>
      </div> 
    </div>
       
  );
};

export default App;