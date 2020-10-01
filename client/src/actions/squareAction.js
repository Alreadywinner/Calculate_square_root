const axios = require('axios');

export const calRoot = (number) =>{
    return(dispatch) => {
        axios.get(`/api/${number}`)
              .then(res => {
                dispatch(calRoot2(res.data.root));
              })
              .catch(err => {
                console.log(err.response.data);
                if(err.response.data === '/login'){
                    dispatch(calRoot2(err.response.data));
                }
            });   

    }
}

export const showLoader = ()=>{
    return(dispatch) =>{
        dispatch({
            type:"SHOW_LOADING"
        });
    }
}

export const hideLoader = ()=>{
    return(dispatch) =>{
        dispatch({
            type:"HIDE_LOADING"
        });
    }
}

export const calRoot2 = (testing)=>{
    return{
        type:'CALCULATE_ROOT',
        payload:{
            test:testing
        }
    }
}