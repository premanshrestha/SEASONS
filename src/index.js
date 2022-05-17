import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{
    state = { lat:null };
    //constructor(props)  {
      //  super(props);
        //THIS IS ONLY TIME we do direct assignment
        //to this.state
        //this.state ={lat:null};
    //}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //we called setstate!!!!!!! 
            (position)=>this.setState({lat:position.coords.latitude}), // setState to update to State
            err=> this.setState({errorMessage :err.message})   
        );
    }

//React says we have to define render!!
renderContent(){

    if(this.state.errorMessage && !this.state.lat) 
    {
        return <div>Error :{this.state.errorMessage}
        </div>
    }
    if(!this.state.errorMessage && this.state.lat)
    {
        return <SeasonDisplay  lat={this.state.lat}/> 
        //<div>Lalitude :{this.state.lat}</div>
    }
    return <Spinner message ='Please accept location request'/>
}
render(){   
    return <div className ="border:red">{this.renderContent()}</div>
        
      }
 }
ReactDOM.render(<App/>, document.querySelector('#root'));