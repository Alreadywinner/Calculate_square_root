import React, { Component } from 'react';
import {calRoot,showLoader,hideLoader} from './actions/squareAction';
import Para from './Para';
import { connect } from 'react-redux';
import './App.css';
class App extends Component {
    constructor(props) {
      super(props);
      this.state={
        number : " ",
        noNumber : " "
      };
      this.handleClick = this.handleClick.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.userValidation = this.userValidation.bind(this);
    }
    handleChange = (e)=>{
      e.preventDefault();
      this.setState({number : e.target.value});
    }
    userValidation = (num)=>{
        var nill = /^\d+$/;
        
        if(nill.test(num)){
          return true;
        }
        else{
          return false;
        }
    }
    loading = ()=>{   
      this.props.showLoader();
      console.log("displaying loader");
  
      setTimeout(()=>{
        this.props.hideLoader();
        console.log("loader hide");
      },6000)
  }
    handleClick = ()=>{
      if(this.userValidation(`${this.state.number}`)){
        console.log("get axios");
        this.props.calRoot(this.state.number);
        this.setState({ noNumber : " ",number : " "});
      }
      else{
        this.setState({ noNumber : " Please Enter a valid Number",number:" "});
      } 
    }
  render() {
    console.log(this.props);
    let warning;
    if(this.state.noNumber){
      warning = <p className = "para-1">{this.state.noNumber}</p>
    }
    return(
    <div>
      <div className="App">
        <div className="main-heading">
          <h1>Welcome</h1>
        </div>
          
        <div className="form">
          <input type="text" placeholder="Enter Number" onChange = {this.handleChange} value = {this.state.num}/>
          <button onClick={() => {this.handleClick(); this.loading()}}>calculate square root</button>
        </div>
        { warning }
        {this.props.loading ? <Para /> : null}
        { this.props.squareR !== " " ? <p className="para">Square Root is : {this.props.squareR}</p> : null }
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return{
    squareR:state.root.num,
    loading:state.root.loading
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      calRoot : (number) => { dispatch(calRoot(number));},
      showLoader : () => { dispatch(showLoader()); },
      hideLoader : () => { dispatch(hideLoader()); }
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);
