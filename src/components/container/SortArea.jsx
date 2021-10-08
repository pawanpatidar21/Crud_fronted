import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Input from '../Other/Input'
import { Studentget } from '../Reducers/action'

const SortArea = () => {

    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")
    const dispatch = useDispatch()
    const handleFilter = (e) => {

        e.preventDefault()
        const payload = { gender, age, city}
        dispatch(Studentget(payload))
    }
  
    // const studentcompo = (e) => {
    //     e.preventDefault()
    //     const student = { name, gender, age, city }
    //     dispatch(Studentadd(student))
    // }
    return (
        <div>
            <Container>
                <Row style={{ marginTop: "50px" }} >
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={handleFilter }>
                            <Row>
                        
                                <Col md={3}>
                                    <Input
                                        label="Age"
                                        placeholder="age"
                                        value={age}
                                        type="number"
                                        onChange={(e) => setAge(e.target.value)}
                                    />

                                    

                                </Col>
                                <Col md={3}>
                                    <Input
                                        label="Gender"
                                        placeholder="gender"
                                        value={gender}
                                        type="text"
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                </Col>
                              <Col md={3}>
                                    <Input
                                        label="City"
                                        placeholder="city"
                                        value={city}
                                        type="text"
                                        onChange={(e) => setCity(e.target.value)}
                                    />

                                </Col>

                            </Row>
                       
                            <Button   style={{ background: "skyblue", color: "#03064B", border: "none", fontWeight: "bolder" }} variant="primary" type="submit">
                                Filter
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default SortArea
