import React, {Component } from 'react';
import {Link} from 'react-router-dom';

class Dispalysrc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
componentDidMount(){
	fetch('http://dummy.restapiexample.com/api/v1/employees')
	.then(res => res.json())
	.then(json =>{
		this.setState({
			isLoaded: true,
			items: json,
		})
	});
}
  
  render() {
   var{ isLoaded, items } =this.state;
   var i=0;
  

   if(!isLoaded){

   	return<div>Loading.......</div>
   }
   else{
    return (
      <div>
        <ul>
        {items.map(items =>(
        	<li key={items.id}>
         {i}
          :- 
        	<Link to ={"/create"+i} params={{testvalue:i}}>Employee Name: {items.employee_name}</Link>
        	<br/> Employee Age: {items.employee_age}

          
          {i++}
          
        	</li>

        	)
          )
        }

        </ul>
        </div>
        
    );
  }
	}
}

export default Dispalysrc;