import axios from 'axios';
import { Route, Redirect } from 'react-router'

export const onVendor=(id)=>{
return(dispatch)=>{
    dispatch(onFetching());
    axios.get("http://localhost:5000/vendor/"+id)
    .then(res=>{
        if(res.status==200){
            console.log(res)
            dispatch(onFetchSuccess(res.data));
            //history.push("/view-salary");

        }
        else{
           // dispatch(onFetchFailure(res.msg));
        }
    }).catch(err=>{
        
        //dispatch(onFetchFailure(res.msg));
    })
}
}

export const onFetchSalary=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewSalary/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}
export const onFetchSalary2=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
        axios.get("http://localhost:5000/viewSalaryrep")
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                console.log(res.data);
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onFetchSalary3=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return axios.get("http://localhost:5000/viewSalary2/"+id)
        .then(res=>{
            if(res.status==200){
                dispatch(onFetchSuccess(res.data));
                return res.data
            }else{
                dispatch(onFetchFailure(res.data.msg))
            }
        })
        .catch(err=>{
            dispatch(onFetchFailure(err))
        })
    }
}

export const onDeleteSalary=(id)=>{
    return (dispatch)=>{
        dispatch(onFetching());
       return  axios.get("http://localhost:5000/deleteSalary/"+id)
        .then(res=>{
            if(res.status==200){
                return true;
            }else{
                return false;
            }
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const getSingleSalary=(id)=>{
    return (dispatch)=>{
        return axios.get("http://localhost:5000/editSalary/"+id)
        .then(res=>{
            //console.log(res);
            return res.data;
        })
        .catch(err=>{
            console.log(err);
            return false;
        })
    }
}

export const onUpdateSalary=(data,trek,history)=>{
    //console.log(data);
    

    //console.log(fd1);
    return (dispatch)=>{
        axios.post("http://localhost:5000/updateSalary",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
            history.push("/view-partsalary/"+trek);
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            dispatch(onUpdateFailure(err.response.msg));
        })
}
}

export const onUpdateSalary2=(data,trek,history)=>{
  
    return (dispatch)=>{
       return axios.post("http://localhost:5000/updateSalary",data)
        .then(res=>{
            if(res.status==200){
            dispatch(onUpdateSuccess(res.data.msg));
                    return true
            }else{
                dispatch(onUpdateFailure(res.data.msg));
            }
        })
        .catch(err=>{
            
            dispatch(onUpdateFailure(err.response.msg));
        })
}
}

export const OnSub=(data)=>{
 
    return (dispatch)=>{
        
            dispatch(onsub(data));
        
            
}
}

export const onAddSuccess=(msg)=>{
    return {
        type:"ADD_SUCCESS",
        payload:msg
    }
}

export const onAddFailure=(msg)=>{
    return {
        type:"ADD_FAILURE",
        payload:msg
    }
}
export const onFetchSuccess=(res1)=>{
    return {
        type:"ON_FETCH_SUCCESS1",
        payload:res1
    }
}
export const onFetchFailure=(msg)=>{
    return {
        type:"ON_FETCH_FAILURE",
        payload:msg,
    }
}
export const onFetching=()=>{
    return{
        type:"ON_FETCHING"
    }
}
export const onUpdateSuccess=(msg)=>{
    return {
        type:"UPDATE_SUCCESS",
        payload:msg
    }
}

export const onUpdateFailure=(msg)=>{
    return {
        type:"UPDATE_FAILURE",
        payload:msg
    }
}
export const onsub=(data)=>{
    return {
        type:"SUBCATEGORY",
        payload:data
    }
}
