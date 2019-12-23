import React, {Component, lazy, Suspense } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


//import Displaysrc from "./component/Displaysrc";
const Displaysrc =lazy(() => import("./component/Displaysrc"));

class App extends Component{
  render(){
  return (
   
    <Router>
    <div>
    <div><h1>Names,Emails,Websites of Company:-</h1></div>
     <Suspense fallback={<div>Please Wait.......</div>}>
    <Route path="/" exact component={Displaysrc} />
    </Suspense>
    
   </div>
   </Router>
   

  );
}
}

export default App;
