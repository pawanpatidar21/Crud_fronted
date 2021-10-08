import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Studentdelete, Studentupdate } from '../Reducers/action'
const Studentlist = ({ item, index }) => {
   
const dispatch = useDispatch()

  
    return (
        <>
        <tbody>
            <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.city}</td>
                <td>
                        <Button style={{ background: "indianred" }} type="submit" variant="success" onClick={() => dispatch(Studentupdate(item))} >Edit</Button>
                </td>
                <td>
                        <Button  type="submit" variant="danger" onClick={() => dispatch(Studentdelete(item._id))} >Delete</Button>
                </td>
            </tr>
            </tbody>
            
        </>
    )
}

export default Studentlist
