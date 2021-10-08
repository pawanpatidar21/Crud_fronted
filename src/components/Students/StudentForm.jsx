import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Input from '../Other/Input'
import { Studentadd } from '../Reducers/action'

const StudentForm = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [city, setCity] = useState("")

    const dispatch = useDispatch()
    
    const studentcompo = (e) => {
        e.preventDefault()
        const student = { name, gender,age,city }
        dispatch(Studentadd(student))
        setAge("")
        setCity("")
        setGender("")
        setName("")
    }
    return (
        <>
            <Container>
                <Row style={{ marginTop: "50px" }} >
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form onSubmit={studentcompo}>
                            <Row>
                                <Col md={6}>
                                    <Input
                                        label="Name"
                                        placeholder="name"
                                        value={name}
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </Col>
                                <Col md={6}>
                                    <Input
                                        label="Age"
                                        placeholder="age"
                                        value={age}
                                        type="number"
                                        onChange={(e) => setAge(e.target.value)}
                                    />

                                </Col>
                            </Row>
                            <Row  >
                                <Col md={6}>
                            <Input
                                label="Gender"
                                placeholder="gender"
                                value={gender}
                                type="text"
                                onChange={(e) => setGender(e.target.value)}
                            />

                            <Input
                                label="City"
                                placeholder="city"
                                value={city}
                                type="text"
                                onChange={(e) => setCity(e.target.value)}
                            />

                                </Col>
                            </Row>
                            <Button style={{ background: "#FDB20F", color:"#03064B",border:"none",fontWeight:"bolder"}} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default StudentForm
