const initialState={
    product:{},
    error:null,
    success:null,
    datastate:"NOT_INITIALIZED",
    update:"",
    select:"",
    pricelow:0,
    pricehigh:100,
    load:false,
    sorted:false,
    filter:"",
    type:""
}

const productReducer=(state=initialState,action)=>{
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
         case "ON_FETCH_SUCCESS":
                return {
                    ...state,
                    product:action.payload,
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
            case "SELECTOR":
            return {
                ...state,
                select:action.payload,
            }
            case "PRICE_LOW":
            return {
                ...state,
                pricelow:action.payload,
            }
            case "PRICE_HIGH":
            return {
                ...state,
                pricehigh:action.payload,
            }
            case "SORT":
            return {
                ...state,
                sorted:action.payload,
            }
            case "FILTER":
            return {
                ...state,
                filter:action.payload,
            }
            case "ONTYPE":
            return {
                ...state,
                type:action.payload,
            }
            case "DISSS":
                return {
                    ...state,
                    success:"",
                    error:""
                }
            default:
            return {...state}
    }
}
export default productReducer;