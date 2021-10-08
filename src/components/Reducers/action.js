import {
    STUDENTADD_REQUEST, STUDENTADD_FAILURE, STUDENTADD_SUCCESS,
    STUDENTGET_REQUEST, STUDENTGET_FAILURE, STUDENTGET_SUCCESS,
    STUDENTDELETE_REQUEST, STUDENTDELETE_FAILURE, STUDENTDELETE_SUCCESS,
    STUDENTUPDATE_REQUEST, STUDENTUPDATE_FAILURE, STUDENTUPDATE_SUCCESS
} from './actionType'

import  axios  from 'axios'


export const studentaddRequest = () => {
    return { type: STUDENTADD_REQUEST }
}
export const studentaddSuccess = async (payload) => {
    console.log(payload)
 

    return { type: STUDENTADD_SUCCESS,payload }
}
export const studentaddFailure = () => {
    return { type: STUDENTADD_FAILURE }
}


export const studentgetRequest = () => {
    return { type: STUDENTGET_REQUEST }
}
export const studentgetSuccess = (payload) => {
    return { type: STUDENTGET_SUCCESS,payload }
}
export const studentgetFailure = () => {
    return { type: STUDENTGET_FAILURE }
}



export const studentdeleteRequest = () => {
    return { type: STUDENTDELETE_REQUEST, }
}
export const studentdeleteSuccess = () => {
    return { type: STUDENTDELETE_SUCCESS, }
}
export const studentdeleteFailure = () => {
    return { type: STUDENTDELETE_FAILURE, }
}
export const studentupdateRequest = () => {
    return { type: STUDENTUPDATE_REQUEST, }
}
export const studentupdateSuccess = () => {
    return { type: STUDENTUPDATE_SUCCESS, }
}
export const studentupdateFailure = () => {
    return { type: STUDENTUPDATE_FAILURE, }
}

export const Studentget = (payload) => async (dispatch) => {
console.log("myaction",payload)
    dispatch(studentgetRequest());
    try {
        if (payload) {
            const { data } = await axios.get(`http://localhost:3500/student?gender=${payload.gender}&city=${payload.city}&age=${payload.age}&page=${payload.page}`);
            dispatch(studentgetSuccess(data));
        } else {
            const { data } = await axios.get(`http://localhost:3500/student`);



            dispatch(studentgetSuccess(data))
        }


    } catch (error) {
        dispatch(studentgetFailure(error));
    }

};

export const Studentadd = (payload) => async (dispatch) => {
    console.log(payload);
    dispatch(studentaddRequest());
    dispatch(Studentget())
    try {
        const { data } = await axios.post(`http://localhost:3500/student`, payload);
        dispatch(studentaddSuccess(data));
        
    } catch (error) {
        dispatch(studentaddFailure(error));
    }
};




export const Studentdelete = (id) => async (dispatch) => {
    console.log(id)
    dispatch(studentdeleteRequest());
    try {
        const { data } = await axios.delete(`http://localhost:3500/student/${id}`);

        console.log(data);

        dispatch(studentdeleteSuccess(id));
        dispatch(Studentget())
    } catch (error) {
        dispatch(studentdeleteFailure(error));
    }
};
export const Studentupdate = (item) => async (dispatch) => {
    console.log(item)
    dispatch(studentupdateRequest());
    try {
        const { data } = await axios.patch(`http://localhost:3500/student/${item._id}`, {
            
        });

        console.log(data);

        dispatch(studentupdateSuccess(item._id));
    } catch (error) {
        dispatch(studentupdateFailure(error));
    }
};




