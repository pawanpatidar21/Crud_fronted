import React, { useEffect,useState } from 'react'
import { Button, Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Studentget } from '../Reducers/action'

import Studentlist from './Studentlist'
const CardCenter = () => {
    const [paginationdone, setPaginationdone] = useState([])
    const [pagenum,setPagenum] = useState(1)
    const mydata = useSelector((state) => state.student.StudentList)
    const {totalPage,size,page} = useSelector((state) => state.student)
    console.log("all pagination data",totalPage, size, page)
    const dispatch = useDispatch()
    useEffect(() => {
       
        dispatch(Studentget())
        setPaginationdone(mydata)
    }, [dispatch,pagenum])
    let arr = new Array(totalPage).fill(0)
    console.log("arraty",arr,paginationdone,mydata)
    const funcButton = (value) => {
        setPagenum(value)
        const updated = paginationdone.filter((el, i) => i >= (value - 1) * size && i < (value * size))
        console.log("updated",updated)
        setPaginationdone(updated)
    }
    return (
        <>
           
                <Table style={{marginTop:"120px"}} >
                    <thead>
                        <tr>
                           <th>S.NO</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>City</th>
                        </tr>
                    </thead>
                { mydata?.map((item, index) => <Studentlist key={item._id} item={item} index={index} />)}
                </Table>
            {arr.map((el, i) => (
                <Button onClick={()=>funcButton(i+1)}>{i+1}</Button>
             ))}
        </>
    )
}

export default CardCenter
