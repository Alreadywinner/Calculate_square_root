import React, { Component } from 'react';
import { connect} from 'react-redux';
import spinner from './Spinner.gif';

class Para extends Component {
  render(){
  const{loading} = this.props;

  if(!loading) return null;
    return(
      <div className="loader-container">
        <div className = "loader">
          <img src={spinner} alt="loading"/>
        </div>
      </div>
      );
  }
}

const mapStateToProps = (state)=>{
  return{
    loading:state.root.loading
  }
}
export default connect(mapStateToProps)(Para);