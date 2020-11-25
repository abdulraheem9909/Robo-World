import React, { Component } from 'react';
import CardList from '../Components/CardList';
import Search from '../Components/Search';
import './App.css';
import axios from 'axios';
import '../spinner/spinner.css';
import Scroll from '../Components/Scroll';

class App extends Component{
    state={
        robots:[],
        search:'',
     


    }
    componentDidMount(){
        axios.get ("https://jsonplaceholder.typicode.com/users")
          .then(res=>{
            this.setState({robots:res.data})
            })
          
    }
    onSearch=(event)=>{
        this.setState({search:event.target.value});
      


    }
    render(){
        const robo =this.state.robots.filter(robot=>{
            return(robot.name.toLowerCase().includes(this.state.search.toLowerCase()));
        })
        if(this.state.robots.length===0){
           return (
               <div className="tc">
                <h1 >loading!!!!</h1>
                <div className="lds-ring"><div></div></div>
               </div>);
               
        }
        else{
            return(
                <div className="tc">
                <h1 className="f1"> Welcome to Robo World</h1>
                <Search searched={this.onSearch}></Search>
                <Scroll>
                <CardList robots={robo}></CardList>
                </Scroll>
                
        
                </div>
                );
            
        }
    
       
    }
}
export default App;