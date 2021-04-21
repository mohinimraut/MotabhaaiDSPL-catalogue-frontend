const initialState={
    vendor:{},
    error:null,
    success:null,
    datastate:"NOT_INITIALIZED",
    update:"",
    subfilter:""
}

const vendorReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_SUCCESS":
            return{
                ...state,
                success:action.payload,
            }
        case "ADD_FAILURE":
            return{
                ...state,
                error:action.payload,
            }
         case "ON_FETCH_SUCCESS1":
                return {
                    ...state,
                    vendor:action.payload,
                    datastate:'FETCHED_SUCCESS',
                    load:true
                }
         case "ON_FETCH_FAILURE":
                return {
                    ...state,
                    error:action.payload,
                    datastate:'FETCHED_FAILURE',
                }
         case "ON_FETCHING":
                return {
                    ...state,
                    datastate:"FETCHING",
                }    
         case "UPDATE_SUCCESS":
            return {
                ...state,
                success:action.payload,
                update:"updated"
            }
         case "UPDATE_FAILURE":
            return {
                ...state,
                error:action.payload,
            }
            case "SUBCATEGORY":
            return {
                ...state,
                subfilter:action.payload,
            }
            
            default:
            return {...state}
    }
}
export default vendorReducer;