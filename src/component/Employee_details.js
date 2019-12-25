import React, { Component } from 'react';





class Employee_details extends Component {

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
      color: 'blue',
      width: '80%',
      border: '1px solid',
  padding: '8px'
    };
 
  	

   var{ isLoaded, items } =this.state;
   // console.log("hey",items[0]);

  var g = this.props.match.params.testvalue[6];
  var k = this.props.match.params.testvalue[7];
  var s = this.props.match.params.testvalue[8];
  var n = this.props.match.params.testvalue[9];
  if(!k){
  	var t = JSON.stringify(items[g]);
  }else if(!s){
  	var t = JSON.stringify(items[g+k]);
  } else if(!n) {
  	var t = JSON.stringify(items[g+k+s]);
  } else {
  	var t = JSON.stringify(items[g+k+s+n]);

  }
 
   if(!isLoaded){
   	return<div>Loading.......</div>
   }
   else{

		return(
			<div>
			
			<div>
			<h3>Employee Details:- </h3><br />
      <table>
      <td style={mystyle}>
			<tr>{t.split(",")[0]}</tr> <br />
		   <tr> {t.split(",")[1]}</tr> <br />
		   <tr> {t.split(",")[2]}</tr> <br />
		    <tr>{t.split(",")[3]}</tr> <br />
        </td>	
			</table>
        </div>
			</div>
			);

		}

	}
}
export default Employee_details;
