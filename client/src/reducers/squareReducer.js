const initState ={
    num : " ",
    loading:false
}
const squareReducer = (state = initState,action) =>{
    switch(action.type){
        case 'CALCULATE_ROOT':
            console.log(action.payload.test.result);
            state.num = action.payload.test.result;
            return{
                num : state.num
            }
        case 'SHOW_LOADING':
            return {
                num : state.num, 
                loading:true
            }
        case 'HIDE_LOADING':
            return{
                num : state.num,
                loading:false
            }
        default:
            return(state);
    }
}
export default squareReducer;