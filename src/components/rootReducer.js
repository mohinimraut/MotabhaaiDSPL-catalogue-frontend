import {combineReducers} from 'redux';
import productReducer from './Redux/Products/ProductReducer';
import storeReducer from './Redux/Stores/StoreReducer';
import vendorReducer from './Redux/Vendor/VendorReducer';

export default combineReducers({   
     product:productReducer,
     vendor:vendorReducer,
     store:storeReducer
});