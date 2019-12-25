import React, {Component, lazy, Suspense } from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom';


import Employee_details from './component/Employee_details';
const Displaysrc =lazy(() => import('./component/Displaysrc'));

class App extends Component{
  render(){
  return (
   
    <Router>
    <div>
    <div><h1>Employee Names,Employee Age of Company:-</h1></div>
     <Suspense fallback={<div>Please Wait.......</div>}>
    <Route path="/" exact component={Displaysrc} />
    </Suspense>
    <Route name="/create" path="/:testvalue" handler={Employee_details} exact component={Employee_details} render={(props) => <Employee_details Displaysrc={Displaysrc} {...props} /> }/>
    
    
   </div>
   </Router>
   

  );
}
}

export default App;

