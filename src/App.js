import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Displaysrc from "./component/Displaysrc";

class App extends Component{
  render(){
  return (
    <Router>
    <div className="App">




   
    </div>
    <Route path="/" exact component={Displaysrc} />
    

    
    </Router>
  );
}
}

export default App;
