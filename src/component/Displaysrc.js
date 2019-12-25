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

    const mystyle = {
      color: 'black',
      width: '50%',
      border: '1px solid',
  padding: '8px'
    };



   var{ isLoaded, items } =this.state;
   var i=0;
  

   if(!isLoaded){

   	return<div>Loading.......</div>
   }
   else{
    return (
      <div>
      {items.map(items =>(
        <table key={items.id}>
        <tr>
        
        	
          
        	<td style={mystyle}><Link to ={"/create"+i} params={{testvalue:i}}>Name: {items.employee_name}</Link></td>
        	<td style={mystyle}>Age: {items.employee_age}</td>
          
          

        	
          {i++}

        	
        </tr>

        </table>
        )
          )
        }
        </div>
        
    );
  }
	}
}

export default Dispalysrc;
