import {
    STUDENTADD_REQUEST, STUDENTADD_FAILURE, STUDENTADD_SUCCESS,
    STUDENTGET_REQUEST, STUDENTGET_FAILURE, STUDENTGET_SUCCESS,
    STUDENTDELETE_REQUEST, STUDENTDELETE_FAILURE, STUDENTDELETE_SUCCESS,
    STUDENTUPDATE_REQUEST, STUDENTUPDATE_FAILURE, STUDENTUPDATE_SUCCESS
} from './actionType'

const initialState = {
  
    isLoading: false,
    student: {
        name: "",
        age: "",
        gender: "",
        city: ""
    },
    page:1
    // allstudent:[]
}

export const appReducer = (state = initialState,{type,payload}) => {
   
    switch (type) {
        case STUDENTADD_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case STUDENTADD_SUCCESS:
            return {
                ...state,
                student:payload,
             
              
            }
        case STUDENTADD_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
        case STUDENTGET_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case STUDENTGET_SUCCESS:
            console.log("abc",payload)
            return {
                ...state,
                student: payload,
                
                isLoading: false
             
            }
        case STUDENTGET_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
        case STUDENTDELETE_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case STUDENTDELETE_SUCCESS:
            console.log("abc",payload)
            return {
                ...state,
                // student:payload,
                isLoading: false
             
            }
        case STUDENTDELETE_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
        case STUDENTUPDATE_REQUEST:
            return {
                ...state, isLoading: true, isError: false
            }
        case STUDENTUPDATE_SUCCESS:
            console.log("abc",payload)
            return {
                ...state,
                // student:payload,
                isLoading: false
             
            }
        case STUDENTUPDATE_FAILURE:
            return {
                ...state, isLoading: false, isError: true
            }
       

        default: return state
    }
}